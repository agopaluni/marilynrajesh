import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'radioSection',
  title: 'Radio Section',
  type: 'document',
  fields: [
    defineField({
      name: 'introText',
      title: 'Introduction Text',
      type: 'text',
      rows: 5,
      description: 'The paragraph describing your radio work',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaText',
      title: 'Button Text',
      type: 'string',
      description: 'Text on the main button (e.g., "Listen / View Clips")',
      initialValue: 'Listen / View Clips',
    }),
    defineField({
      name: 'ctaLink',
      title: 'Button Link',
      type: 'url',
      description: 'Where the button should go (your radio clips or playlist)',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'moments',
      title: 'Radio Moments',
      type: 'array',
      description: 'Photos from your time on air (2-4 recommended)',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Photo Description',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.min(1).max(6),
    }),
  ],
})
