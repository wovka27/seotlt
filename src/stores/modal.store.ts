import React from 'react'
import { makeAutoObservable } from 'mobx'

class ModalStore {
  component: React.ReactNode | null = null
  title: string = ''

  constructor() {
    makeAutoObservable(this)
  }

  open = (title: string, node: React.ReactNode) => {
    this.title = title
    this.component = node
  }

  close = () => {
    this.component = null
    this.title = ''
  }
}

const modalStore = new ModalStore()

export default modalStore
