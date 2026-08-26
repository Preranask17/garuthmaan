import { NextResponse } from 'next/server';

export async function POST() {
  const host = process.env.NEXT_PUBLIC_HASHNODE_HOST;
  if (!host) {
    return NextResponse.json({ error: 'No host configured' }, { status: 400 });
  }

  const query = `
    query GetArticles($host: String!) {
      publication(host: $host) {
        posts(first: 6) {
          edges {
            node {
              id
              title
              brief
              slug
              tags { name }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { host } }),
    });

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}