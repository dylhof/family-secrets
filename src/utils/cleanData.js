export const cleanData = (object) => {
  const newData = object.data.map(item => {
    if (item.type === 'story') {
      return {id: item.id, title: item.attributes.title, content: item.attributes.content, family_id: item.relationships.family.data.id}
    } else if (item.type === 'recipe') {
      return {id: item.id, title: item.attributes.title, ingredients: item.attributes.ingredients, instructions: item.attributes.instructions, family_id: item.relationships.family.data.id}
    } else {
      return {id: item.id, caption: item.attributes.caption, image: item.attributes.image, family_id: item.relationships.family.data.id}
    }
  })
  return newData
}