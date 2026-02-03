import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'aboutSection',
  title: 'About Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'The heading for this section',
      initialValue: 'ABOUT',
    }),
    defineField({
      name: 'paragraphs',
      title: 'About Text',
      type: 'array',
      description: 'Write your bio here. Each paragraph will be separated visually.',
      of: [
        {
          type: 'text',
          rows: 4,
        },
      ],
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
  ],
})
