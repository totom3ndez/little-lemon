import { useState } from "react";

const BookingForm = ({ availableTimes, updateTimes, submitForm}) => {
  const required = <sup style={{color: '#ea3c30', fontWeight: 'bold'}}>*</sup>
  const [formData, setFormData] = useState( {
    fullName: '',
    phoneNumber: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    occasion: 'Birthday'
  })
  const clearForm = () => {
    setFormData({
      fullName: "",
      phoneNumber: "",
      email: "",
      date: '',
      time: "",
      guests: 1,
      occasion: "None",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phoneNumber || !formData.email || !formData.date || !formData.time) {
      alert("Please fill in all required fields.");
      return;
    }

    submitForm(formData);
    clearForm();
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setFormData({ ...formData, date: selectedDate });
    updateTimes(new Date(selectedDate));
  }

 

  return (
    <section id="booking-page" style={{ padding: "20px" }}>
      <form onSubmit={handleSubmit} aria-label="Reservation form">
        <section style={{ display: "grid", maxWidth: "300px", gap: "20px", marginTop: "30px" }}>
          <h2 style={{ fontSize: "20px" }} id="form-heading">Reservation Details</h2>

          <label htmlFor="res-name" aria-required="true">Full name {required}</label>
          <input
            type="text"
            placeholder="John Doe"
            id="res-name"
            name="fullName"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            required
            aria-label="Full name"
            aria-describedby="fullname-error"
          />

          <label htmlFor="res-phone" aria-required="true">Phone number {required}</label>
          <input
            type="tel"
            placeholder="123-456-7890"
            id="res-phone"
            name="phoneNumber"
            minLength={9}
            pattern="[0-9-]{9,}"
            value={formData.phoneNumber}
            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            required
            aria-label="Phone number"
            aria-describedby="phone-error"
          />

          <label htmlFor="res-email" aria-required="true">Email {required}</label>
          <input
            type="email"
            placeholder="hello@little-lemon.com"
            id="res-email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            size="30"
            required
            aria-label="Email address"
            aria-describedby="email-error"
          />

          <label htmlFor="res-date" aria-required="true">Choose date {required}</label>
          <input
            type="date"
            id="res-date"
            name="date"
            value={formData.date}
            onChange={handleDateChange}
            min={new Date().toISOString().split("T")[0]}
            required
            aria-label="Reservation date"
            aria-describedby="date-error"
          />

          <label htmlFor="res-time" aria-required="true">Choose time {required}</label>
          <select
            id="res-time"
            name="time"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            required
            aria-label="Reservation time"
            aria-describedby="time-error"
          >
            <option value="">Select a time</option>
            {availableTimes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          <label htmlFor="guests" aria-required="true">Number of guests {required}</label>
          <input
            type="number"
            placeholder="2"
            min="2"
            max="10"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
            required
            aria-label="Number of guests"
            aria-describedby="guests-error"
          />

          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
            aria-label="Occasion"
          >
            <option value="None">None</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>

          <input
            type="submit"
            id="booking-button"
            value="Make Your reservation"
            style={{ margin: "0 auto" }}
            aria-label="Submit reservation"
          />
        </section>
      </form>
    </section>
  );
};

export default BookingForm;