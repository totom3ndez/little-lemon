import Navbar from "./Navbar"

const Header = (props) => {

  return (
    <nav>
    <img src='./Logo.svg' alt="Little Lemon logo" />
    <Navbar isMobile={props.isMobile} />
    </nav>
  )
}

export default Header