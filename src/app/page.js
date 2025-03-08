import React from 'react'
import NavBar from '@/components/module/navbar'
import MainBody from '@/components/pages/mainBody'
import MainFooter from '@/components/pages/mainFooter'

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