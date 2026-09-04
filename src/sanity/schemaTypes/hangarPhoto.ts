import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'hangarPhoto',
  title: 'Hangar Photo',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'aspectRatio',
      title: 'Aspect Ratio',
      type: 'string',
      options: {
        list: [
          { title: 'Hero (Large)', value: 'hero' },
          { title: 'Tall', value: 'tall' },
          { title: 'Medium', value: 'medium' },
          { title: 'Square', value: 'square' },
          { title: 'Banner', value: 'banner' },
          { title: 'Compact', value: 'compact' },
        ],
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
  ],
});