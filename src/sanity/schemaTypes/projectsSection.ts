import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'projectsSection',
  title: 'Projects Section',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ 
        name: 'projects', 
        title: 'Projects', 
        type: 'array',
        of: [{
            type: 'object',
            fields: [
                {name: 'title', type: 'string', title: 'Title'},
                {name: 'badge', type: 'string', title: 'Badge'},
                {name: 'description', type: 'text', title: 'Description'}
            ]
        }]
    }),
  ],
});