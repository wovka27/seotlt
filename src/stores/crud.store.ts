import { action, observable } from 'mobx'
import { storage } from '@/services/storage'
import { generateUUID } from '@/helpers/generateUUID'

export default class CrudStore<T extends { uuid: string }> {
  public items: T[] = []

  protected observableAnnotations = {
    items: observable,
    createItem: action,
    readItem: action,
    updateItem: action,
    deleteItem: action
  }

  constructor(protected storageKey: string) {
    this.createItem = this.createItem.bind(this)
    this.readItem = this.readItem.bind(this)
    this.updateItem = this.updateItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)

    this.loadFromStorage()
  }

  private saveToStorage() {
    storage.setItem(this.storageKey, this.items)
  }

  private loadFromStorage() {
    this.items = storage.getItem(this.storageKey) ?? []
  }

  public createItem(item: T) {
    this.items.push({ ...item, uuid: generateUUID() })
    this.saveToStorage()
  }

  public readItem(uuid: string) {
    return this.items.find((i) => i.uuid === uuid)
  }

  public updateItem(uuid: string, data: Partial<T>) {
    const item = this.readItem(uuid)

    if (!item) return

    Object.assign(item, data)
    this.saveToStorage()
  }

  public deleteItem(uuid: string) {
    this.items = this.items.filter((i) => i.uuid !== uuid)
    this.saveToStorage()
  }
}
