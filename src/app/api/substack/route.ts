import { NextResponse } from 'next/server';

const sanitizeText = (str: string): string => {
  if (!str) return "";
  return str
    .replace(/<!\[CDATA\[/gi, "")        .replace(/\]\]>/gi, "")
    .replace(/<[^>]*>/g, "") // strip HTML tags
    .replace(/&#8217;|&#39;|&#8216;/g, "'")
    .replace(/&#8220;|&#8221;/g, '"')
    .replace(/&#8212;|&#8211;/g, "—")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .trim();
};

const extractImage = (content: string) => {
  const enclosureMatch = content.match(/<enclosure.*?url=["'](.*?)["']/i);
  if (enclosureMatch) return enclosureMatch[1];
  const mediaMatch = content.match(/<media:content.*?url=["'](.*?)["']/i);
  if (mediaMatch) return mediaMatch[1];
  const imgMatch = content.match(/<img.*?src=["'](.*?)["']/i);
  if (imgMatch) return imgMatch[1];
  return "/default-aero.jpg";
};

export async function GET() {
  const domain = process.env.NEXT_PUBLIC_SUBSTACK_DOMAIN || "meeraa13";
  const url = `https://${domain}.substack.com/feed`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch feed");
    
    const xml = await response.text();

    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    const matches = [...xml.matchAll(itemRegex)];

    const posts = matches.map(match => {
      const content = match[1];
      
      const title = sanitizeText(content.match(/<title>(.*?)<\/title>/)?.[1] || "");
      const link = content.match(/<link>(.*?)<\/link>/)?.[1] || "#";
      const pubDate = content.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || "";
      
      const descMatch = content.match(/<description>(.*?)<\/description>/s);
      const snippet = sanitizeText(descMatch ? descMatch[1] : "").substring(0, 150) + "...";
      
      const image = extractImage(content);

      return { title, link, pubDate, snippet, image };
    });

    return NextResponse.json({ success: true, posts });
  } catch (error) {
    console.error("RSS Fetch Error:", error);
    return NextResponse.json({ success: false, posts: [] });
  }
}