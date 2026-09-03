import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'hangarPhoto',
  title: 'Hangar Photo',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'aspectRatio',
      title: 'Aspect Ratio',
      type: 'string',
      options: {
        list: [
          { title: 'Featured Hero', value: 'hero' },
          { title: 'Tall Vertical', value: 'tall' },
          { title: 'Medium Landscape', value: 'medium' },
          { title: 'Small Square', value: 'square' },
          { title: 'Wide Banner', value: 'banner' },
          { title: 'Compact Accent', value: 'compact' },
        ],
      },
    }),
    defineField({ name: 'publishedAt', title: 'Published at', type: 'datetime' }),
  ],
});