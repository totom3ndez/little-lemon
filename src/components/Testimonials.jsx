import { testimonials } from "../data/testimonials"

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-container">
        {
          testimonials.map((testimonial) => (
            <div className="testimonial" key={testimonial.id}>
              <div className="avatar-container">
              <img src={testimonial.avatar} alt={`${testimonial.name}'s avatar`} className="avatar" />
              <h3 className="avatar-name">{testimonial.name}</h3>
              </div>
              <p>{testimonial.text}</p>
            </div>
          ))
        }
        </div>
    </section>
  )
}

export default Testimonials