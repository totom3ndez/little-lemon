import { Link } from "react-router-dom"

const ConfirmedBooking = () => {
  return (
    <section id="confirmed-booking" style={{ padding: "20px", textAlign: "center" }}>
      <h2>Your reservation has been confirmed.</h2>
      <p>Thank you for choosing us! We look forward to serving you.</p>
      <Link to='/booking-confirmation' className="booking-button">See booking confirmation</Link>
    </section>
  )
}

export default ConfirmedBooking