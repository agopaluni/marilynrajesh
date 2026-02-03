export default {
  name: 'floatingBubbles',
  title: 'Floating Bubbles',
  type: 'document',
  fields: [
    {
      name: 'bubbles',
      title: 'Floating Bubble Images',
      description: 'Add 5-8 photos that will float and animate around the page. These could be photos of you, your work, or anything meaningful.',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
              description: 'Describe the image for accessibility',
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.max(8),
    },
  ],
}
