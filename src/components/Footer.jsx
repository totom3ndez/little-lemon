import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-container">
      <img src="restaurant.jpg" alt="restaurant" className="footer-img" />
      <div className="footer-content">
      <ul>
        <h3>Doormat Navigation</h3>
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><Link to='/menu'>Menu</Link></li>
        <li><Link to='/booking'>Reservations</Link></li>
        <li><Link to='/order-online'>Order Online</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
      <ul>
        <h3>Contact</h3>
        <li>Adress</li>
        <li>555-545-444</li>
        <li>hello@littlelemon.com</li>
      </ul>
      <ul>
        <h3>Social Media</h3>
        <li>Facebook</li>
        <li>Instagram</li>
      </ul>
      </div>
      </div>
    </section>
  )
}

export default Footer