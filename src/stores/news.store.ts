import { makeObservable } from 'mobx'
import BaseStore from '@/stores/base.store'
import { generateUUID } from '@/helpers/generateUUID'

export interface INewsItem {
  uuid: string
  title: string
  excerpt: string
  imageUrl: string
  date: string
  category: string
}

class NewsStore extends BaseStore<INewsItem> {
  constructor() {
    super('news')
    makeObservable(this, { ...this.observableAnnotations })
  }
}

const newsStore = new NewsStore()

export default newsStore
