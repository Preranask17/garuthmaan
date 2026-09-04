import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import hangarPhoto from './src/sanity/schemaTypes/hangarPhoto';
import { projectId, dataset } from './src/sanity/env';

export default defineConfig({
  name: 'default',
  title: 'Garuthmaan CMS',
  projectId,
  dataset,
  plugins: [structureTool()],
  schema: {
    types: [hangarPhoto],
  },
});