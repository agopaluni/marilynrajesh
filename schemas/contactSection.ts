import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contactSection',
  title: 'Contact Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'Main heading for the contact section',
      initialValue: "Let's Connect",
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'The friendly invitation text below the title',
    }),
    defineField({
      name: 'socials',
      title: 'Social Media Links',
      type: 'array',
      description: 'Your social media profiles',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
              description: 'Which social network?',
              options: {
                list: [
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'Email', value: 'email' },
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'label',
              title: 'Display Name',
              type: 'string',
              description: 'How it appears on the site (e.g., "Instagram")',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'url',
              title: 'Link',
              type: 'url',
              description: 'Full URL to your profile or mailto: for email',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'platform',
            },
          },
        },
      ],
    }),
  ],
})
