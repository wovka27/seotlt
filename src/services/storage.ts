export const storage = {
  setItem<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  getItem<T>(key: string): T | null {
    const result = localStorage.getItem(key)
    return result ? (JSON.parse(result) as T) : null
  },
  removeItem(key: string) {
    localStorage.removeItem(key)
  }
}
