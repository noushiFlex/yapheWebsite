import React from 'react'
import NavBar from '@/components/module/navbar'
import MainBody from '@/components/pagesMain/MainBody'
import MainFooter from '@/components/pagesMain/MainFooter'

function App() {
  return (
    <main>
      <div className=' w-full overflow-hidden'> {/* Header */}
        <NavBar />
        <MainBody />
        <MainFooter />
      </div>
    </main>
  )
}

export default App