export const isDateString = (value: string): boolean => {
  const isoDateRegex = /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|([+-]\d{2}:\d{2})))?$/
  if (isoDateRegex.test(value)) return true

  const parsedDate = new Date(value)
  return !isNaN(parsedDate.getTime()) && value !== ''
}
