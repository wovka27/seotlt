import { action, observable } from 'mobx'
import { storage } from '@/services/storage'
import { generateUUID } from '@/helpers/generateUUID'

export interface IBaseItem {
  uuid: string
  created_at?: string
  updated_at?: string
}

export default class CrudStore<T extends IBaseItem> {
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

  public createItem(item: T) {
    this.items.push({ ...item, uuid: generateUUID(), created_at: new Date(), updated_at: new Date() })
    this.saveToStorage()
  }

  public readItem(uuid: string, key: keyof T = 'uuid') {
    return this.items.find((i) => i[key] === uuid)
  }

  public updateItem(uuid: string, data: Partial<T>) {
    const item = this.readItem(uuid)

    if (!item) return

    item.updated_at = new Date().toString()

    Object.assign(item, data)
    this.saveToStorage()
  }

  public deleteItem(uuid: string) {
    this.items = this.items.filter((i) => i.uuid !== uuid)
    this.saveToStorage()
  }

  private saveToStorage() {
    storage.setItem(this.storageKey, this.items)
  }

  private loadFromStorage() {
    this.items = storage.getItem(this.storageKey) ?? []
  }
}
