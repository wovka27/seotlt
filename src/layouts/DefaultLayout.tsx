import React, { PropsWithChildren } from 'react'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import UiModal from '@/components/UI/UiModal'

const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <UiModal />
      <Footer />
    </>
  )
}

export default DefaultLayout
