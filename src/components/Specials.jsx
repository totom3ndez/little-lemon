import { Link } from 'react-router-dom'
import SpecialsData from '../data/specials'

const Specials = () => {
  return (
    <section id='specials' className='specials'>
      <div className='specials__header'>
        <h2>This week's specials!</h2>
        <Link to="/booking" id="Menu-button" role="button">Online Menu</Link>
      </div>
      <div className='specials__list'>
        {SpecialsData.map((item) => (
          <div className='specials__item' key={item.id}>
            <img src={item.img} alt={item.name} />
            <div className='specials__info'>
              <div className='specials__info-header'>
              <h3>{item.name}</h3>
              <span className='specials__info-price'>${item.price.toFixed(2)}</span>
              </div>
              <p>{item.desc}</p>
              <span className='specials__info-order'>

              <Link className='order-button' to='/order' >Order a delivery  </Link><img src="./svg/moto.svg" alt="moto" className='moto-delivery'/>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Specials