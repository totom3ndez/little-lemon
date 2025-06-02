
const Hero = () => {
  return (
    <section id='hero'>
        <div id="hero-container">
        <div id="hero-text">
          <div id="title">
          <h1>Little Lemon</h1>
          <p id="location">Chicago</p>
          </div>
          <p id="briefing">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <a href="/booking" id="booking-button" role="button">Reserve a table</a>
        </div>
        <img src="./restauranfood.jpg" alt="Restaurant food" />
        </div>
      </section>
  )
}

export default Hero