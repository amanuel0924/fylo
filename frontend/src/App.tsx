import React from 'react'
import { Navbar } from './componets/Navbar'
//import { Upload } from './pages/Upload'
import { Files } from './pages/Files'


const App:React.FC= () => {
 
  return (
    <>
    <Navbar/>
    <Files/>
   {/* <Upload/> */}
    </>
  )
}

export default App
