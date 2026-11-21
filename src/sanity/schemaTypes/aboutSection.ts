import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'aboutSection',
  title: 'About Section',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ 
        name: 'stats', 
        title: 'Stats', 
        type: 'array',
        of: [{
            type: 'object',
            fields: [
                {name: 'label', type: 'string', title: 'Label'},
                {name: 'value', type: 'string', title: 'Value'}
            ]
        }]
    }),
  ],
});