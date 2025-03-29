import { makeObservable } from 'mobx'
import CrudStore from '@/stores/crud.store'

export interface INewsItem {
  uuid: string
  title: string
  excerpt: string
  imageUrl: string
  date: string
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
