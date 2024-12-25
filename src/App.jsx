import React, { useEffect, useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import About from './Component/About Us/About';
import Footer from './Component/Footer/Footer';





const App = () => {

    <Navbar />




  const current_theme = localStorage.getItem('current_theme')
  const [theme, setTheme] = useState(current_theme?current_theme:'light');
     useEffect(()=>{
         localStorage.setItem('current_theme',theme)
     },[theme])

  return (
    <>


    <div className={`container ${theme}`}>

      <Navbar theme={theme} setTheme={setTheme}/>
      
    </div>
    <About/>
    
     <Footer/>
    </>
  )
}

export default App
