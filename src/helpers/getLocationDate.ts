export const getLocationDate = (d: Date) =>
  new Date(d).toLocaleDateString('default', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
  })
