import React from 'react'
import NavBar from '@/components/module/navbar'
import MainBody from '@/components/pages/mainBody'

function App() {
  return (
    <main>
      <div className=' w-full overflow-hidden'> {/* Header */}
        <NavBar />
        <MainBody />
      </div>
    </main>
  )
}

export default App