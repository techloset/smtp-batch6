const reviews = {
    name: 'reviews',
    title: 'Reviews',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'position',
        title: 'Position',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      }
    ],
    preview: {
      select: {
        name: 'name',
        position:"position",
        description: 'description'
      },
    },
  }
  
  export default reviews