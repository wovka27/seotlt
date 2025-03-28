export const generateUUID = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r: number = (Math.random() * 16) | 0
    const value: number = c === 'x' ? r : (r & 0x3) | 0x8
    return value.toString(16)
  })
}
