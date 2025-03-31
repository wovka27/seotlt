import { makeObservable } from 'mobx'
import CrudStore, { IBaseItem } from '@/stores/crud.store'

export interface INewsItem extends IBaseItem {
  title: string
  excerpt: string
  imageUrl: string
  category: string
}

class NewsStore extends CrudStore<INewsItem> {
  constructor() {
    super('news')
    makeObservable(this, { ...this.observableAnnotations })
  }
}

const newsStore = new NewsStore()

export default newsStore
