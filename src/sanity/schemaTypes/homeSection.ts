import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'homeSection',
  title: 'Home Section',
  type: 'document',
  fields: [
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'ctaWork', title: 'CTA Work Button', type: 'string' }),
    defineField({ name: 'ctaTeam', title: 'CTA Team Button', type: 'string' }),
  ],
});