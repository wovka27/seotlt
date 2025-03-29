export const getLocationDate = (d: Date) =>
  new Date(d).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
  })
