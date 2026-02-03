import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'writingSection',
  title: 'Writing Section',
  type: 'document',
  fields: [
    defineField({
      name: 'introText',
      title: 'Introduction Text',
      type: 'text',
      rows: 4,
      description: 'The paragraph that appears before your writing pieces',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pieces',
      title: 'Writing Pieces',
      type: 'array',
      description: 'Your published articles and writing work',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Article Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'blurb',
              title: 'Short Description',
              type: 'text',
              rows: 2,
              description: 'A brief 1-2 sentence summary',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'tags',
              title: 'Tags',
              type: 'array',
              description: 'Topics or categories (e.g., "Journalism", "Fiction")',
              of: [{ type: 'string' }],
            },
            {
              name: 'link',
              title: 'Article Link',
              type: 'url',
              description: 'Full URL where the article can be read',
              validation: (Rule) =>
                Rule.uri({
                  scheme: ['http', 'https'],
                }),
            },
            {
              name: 'coverImage',
              title: 'Cover Image (Optional)',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'blurb',
              media: 'coverImage',
            },
          },
        },
      ],
    }),
  ],
})
