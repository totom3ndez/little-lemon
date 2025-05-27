import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <ul id="navbar">
      <li><Link to="/">Home</Link></li>
      <li><Link to="#about">About</Link></li>
      <li><Link to="/menu">Menu</Link></li>
      <li><Link to="/booking">Reservations</Link></li>
      <li><Link to="/order-online">Order Online</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  )
}

export default Navbar