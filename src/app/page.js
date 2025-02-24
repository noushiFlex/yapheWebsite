import React from 'react'
import NavBar from '@/components/module/navbar'
import MainBody from '@/components/pages/mainBody'

function App() {
  return (
    <div>
      <div className=' w-full overflow-hidden'> {/* Header */}
        <NavBar />
        <MainBody />
      </div>
    </div>
  )
}

export default App