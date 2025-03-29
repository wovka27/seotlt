export const getLocationDate = (d: Date, invert?: boolean) =>
  new Date(d).toLocaleDateString(invert ? 'en-EN' : 'default', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
  })
