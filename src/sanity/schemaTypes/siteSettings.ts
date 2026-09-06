import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings & Form Links',
  type: 'document',
  fields: [
    defineField({
      name: 'workshopFormUrl',
      title: 'Workshop Form URL',
      type: 'url',
      description: 'Leave empty to hide the Workshop button from the navbar.',
    }),
    defineField({
      name: 'joinTeamFormUrl',
      title: 'Join Team Form URL',
      type: 'url',
      description: 'URL for the Join The Team button.',
    }),
    defineField({
      name: 'sponsorFormUrl',
      title: 'Sponsor Form URL',
      type: 'url',
      description: 'URL for the Become a Sponsor / Sponsors & Partners button.',
    }),
    defineField({
      name: 'substackUrl',
      title: 'Substack / External Blog URL',
      type: 'url',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram Profile URL',
      type: 'url',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn Profile URL',
      type: 'url',
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube Channel URL',
      type: 'url',
    }),
  ],
});