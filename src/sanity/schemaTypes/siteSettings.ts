import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'workshopFormUrl', title: 'Workshop Google Form Link', type: 'url' }),
    defineField({ name: 'sponsorFormUrl', title: 'Sponsorship Google Form Link', type: 'url' }),
    defineField({ name: 'ownerContactEmail', title: 'Owner Contact Email', type: 'string' }),
  ],
});