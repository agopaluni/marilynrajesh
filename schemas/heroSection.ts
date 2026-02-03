import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'heroSection',
  title: 'Hero Section (Homepage Intro)',
  type: 'document',
  fields: [
    defineField({
      name: 'mainHeadline',
      title: 'Main Headline',
      type: 'string',
      description: 'The first, larger line of text (e.g., "Hello and welcome to my creative space!")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subheadline',
      title: 'Sub-headline',
      type: 'text',
      rows: 3,
      description: 'The smaller text below the main headline',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaText',
      title: 'Button Text',
      type: 'string',
      description: 'Text on the "Learn More" button',
      initialValue: 'Learn More',
    }),
    defineField({
      name: 'heroImage',
      title: 'Main Hero Photo',
      type: 'image',
      description: 'Your main portrait photo (best as portrait orientation)',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'auxiliaryImages',
      title: 'Floating Images',
      type: 'array',
      description: 'Small images that float around the hero (3 recommended)',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (Rule) => Rule.max(3),
    }),
  ],
})
