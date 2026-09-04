import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'footerSection',
  title: 'Footer Section',
  type: 'document',
  fields: [
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'email', title: 'Contact Email', type: 'string' }),
    defineField({ name: 'copyright', title: 'Copyright Notice', type: 'string' }),
  ],
});