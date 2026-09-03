import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import hangarPhoto from './src/sanity/schemaTypes/hangarPhoto';

export default defineConfig({
  name: 'default',
  title: 'Garuthmaan CMS',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'dummy',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  plugins: [structureTool()],
  schema: {
    types: [hangarPhoto],
  },
});