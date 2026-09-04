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
          { title: 'Hero Large', value: 'hero-large' },
          { title: 'Hero Portrait (Extra Tall)', value: 'hero-portrait' },
          { title: 'Tall Medium', value: 'tall-medium' },
          { title: 'Tall Small', value: 'tall-small' },
          { title: 'Wide Banner (Full Row)', value: 'wide-banner' },
          { title: 'Wide Medium', value: 'wide-medium' },
          { title: 'Wide Small', value: 'wide-small' },
          { title: 'Square Large', value: 'square-large' },
          { title: 'Square Small', value: 'square-small' },
          { title: 'Micro Accent', value: 'micro-accent' },
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