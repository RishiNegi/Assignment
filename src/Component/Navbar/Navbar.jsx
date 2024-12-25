import React from 'react'
import  './Navbar.css'
import logo_light from '../../assets/logo-black.jpg'
import logo_dark from '../../assets/logo-white.jpg'
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'
import toogle_light from '../../assets/night.png'
import toogle_dark from '../../assets/day.png'
import rishi from '../../assets/DJI_0048.jpeg'

const Navbar = ({theme, setTheme}) => {
  const toggle_mode = ()=>{
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }
   




  return (
    <>
    <div className={`container ${theme}`}>

    
    <div>
 
     

     <div className='navbar'>

      <img src={theme == 'light' ? logo_light : logo_dark} alt="" className='logo'/>

      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Our Project</li>
        <li>Career</li>
        <li>Gallery</li>
        <li>Contact Us</li>
      </ul>

      <div className='Search-box'>
        <input type="text" placeholder='Search Projects'/>
        <img src={ theme == 'light' ? search_icon_light : search_icon_dark} alt=""/>
</div>


<img onClick={()=>{toggle_mode()}}  src={theme == 'light' ? toogle_light : toogle_dark} alt="" className='toggle-icon'/>
</div>

<div className="rishi3">
  <img src={rishi} alt="bn" className='rishi3-img'/></div>
  

</div>

</div>

</>


  )
}

export default Navbar
