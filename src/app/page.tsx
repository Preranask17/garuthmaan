export const revalidate = 0;

import BackgroundSequence from '@/components/BackgroundSequence';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Milestones from '@/components/Milestones';
import Hangar from '@/components/Hangar';
import Blogs from '@/components/Blogs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { client } from '@/sanity/client';

async function getSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]{ workshopFormUrl, joinTeamFormUrl, sponsorFormUrl, substackUrl, instagramUrl, linkedinUrl, youtubeUrl }`);
}

export default async function Home() {
  const siteSettings = await getSiteSettings();

  return (
    <main className="bg-transparent text-white min-h-screen relative overflow-x-hidden pt-20">
      <BackgroundSequence />
      <div className="relative z-10">
        <Navbar
          workshopFormUrl={siteSettings?.workshopFormUrl}
          joinTeamFormUrl={siteSettings?.joinTeamFormUrl}
          sponsorFormUrl={siteSettings?.sponsorFormUrl}
        />
        <Hero/>
        <About/>
        <Milestones/>
        <Hangar/>
        <Blogs substackUrl={siteSettings?.substackUrl} />
        <Contact
          joinTeamFormUrl={siteSettings?.joinTeamFormUrl}
          sponsorFormUrl={siteSettings?.sponsorFormUrl}
        />
        <Footer
          instagramUrl={siteSettings?.instagramUrl}
          linkedinUrl={siteSettings?.linkedinUrl}
          youtubeUrl={siteSettings?.youtubeUrl}
        />
      </div>
    </main>
  );
}