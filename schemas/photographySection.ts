import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'photographySection',
  title: 'Photography Section',
  type: 'document',
  fields: [
    defineField({
      name: 'introText',
      title: 'Introduction Text',
      type: 'text',
      rows: 4,
      description: 'The paragraph that appears before your photo gallery',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Photo Gallery',
      type: 'array',
      description: 'Your photography work (6-15 photos recommended). Drag to reorder.',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              title: 'Caption (Optional)',
              type: 'string',
              description: 'A brief description of this photo',
            },
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Describe the photo for accessibility',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.min(1).max(20),
    }),
  ],
})
