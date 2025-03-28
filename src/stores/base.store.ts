import { action, observable } from 'mobx'
import { storage } from '@/services/storage'
import { generateUUID } from '@/helpers/generateUUID'

export interface ICRUDStore<T> {
  items: T[]

  createItem(item: Omit<T, 'uuid'>): void

  readItem(uuid: string): T | undefined

  updateItem(uuid: string, data: Partial<T>): void

  deleteItem(uuid: string): void
}

export default class BaseStore<T extends { uuid: string }> implements ICRUDStore<T> {
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

  public createItem(item: Omit<T, 'uuid'>) {
    this.items.push({ uuid: generateUUID(), ...item } as T)
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
