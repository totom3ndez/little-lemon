import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom"

const Navbar = () => {

  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  }

  useEffect(() => {
  handleResize(); // Set initial state
  window.addEventListener('resize', handleResize);
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

const handleMenu = () => {
  setIsOpen(prev => !prev)
}


  return (
    <>
    {
      isMobile
      ?
      <>
        {
          isOpen
          ?
          <ul className="navbar-mobile">
            <button onClick={handleMenu} className="closer">
              <img src="./svg/close.svg" alt="closer" />
            </button>
            <li><a onClick={handleMenu} href="/">Home</a></li>
            <li><a onClick={handleMenu} href="#about">About</a></li>
            <li><Link onClick={handleMenu} to="/menu">Menu</Link></li>
            <li><Link onClick={handleMenu} to="/booking">Reservations</Link></li>
            <li><Link onClick={handleMenu} to="/order-online">Order Online</Link></li>
            <li><Link onClick={handleMenu} to="/login">Login</Link></li>
          </ul>
          :
          <button onClick={handleMenu} className="opener-button">
            <img src="./svg/hamburger.svg" alt="opener" />
          </button>
        }
      
      </>
    :
      <ul className="navbar">
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/booking">Reservations</Link></li>
        <li><Link to="/order-online">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    
  }
  </>
  )
}

export default Navbar