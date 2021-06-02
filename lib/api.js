import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

/**
 *
 *
 * @export
 * @return {[]}
 */
export async function getProjects(query) {
  const entries = await client.getEntries(query);

  return entries?.items;
}
