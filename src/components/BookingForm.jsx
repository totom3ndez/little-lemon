import { useState } from "react";
import {submitAPI} from "../data/api"; // Assuming you have a function to submit the form data

const BookingForm = ({ availableTimes, updateTimes}) => {
  const [filledContact, setFilledContact] = useState(false);
  const required = <sup style={{color: '#ea3c30', fontWeight: 'bold'}}>*</sup>
  const [formData, setFormData] = useState( {
    fullName: '',
    phoneNumber: '',
    email: '',
    date: '',
    time: '',
    guests: 1,
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
    console.log("Reservation Details:", formData);
    submitAPI(formData)
    alert("Your reservation has been made successfully!");
    clearForm();
    setFilledContact(false);
  };
  const handlePreviousStep = (e) => {
    e.preventDefault();
    setFilledContact(false);
  }
   const handleNextStep = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phoneNumber || !formData.email) {
      alert("Please fill in all contact details before proceeding.");
      return;
    }
    setFilledContact(true);
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setFormData({ ...formData, date: selectedDate });
    updateTimes(new Date(selectedDate));
  }


  return (
    <section id="booking-page" style={{ padding: "20px" }}>
      <form onSubmit={handleSubmit}>
        {filledContact ? (
          <section
            className="second-step"
            style={{ display: "grid", maxWidth: "300px", gap: "20px", marginTop: "30px" }}
          >
            <button style={{ margin: "0 auto" }} id="booking-button" onClick={handlePreviousStep}>
              Previous Step
            </button>
            <h2 style={{ fontSize: "20px" }}>Now we need your reservation details.</h2>

            <label htmlFor="res-date">Choose date {required}</label>
            <input
              type="date"
              id="res-date"
              value={formData.date}
              onChange={handleDateChange}
              min={new Date().toISOString().split("T")[0]} // Prevent past dates
              required
            />

            <label htmlFor="res-time">Choose time {required}</label>
            <select
              id="res-time"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              required
            >
              <option value="">Select a time</option>
              {availableTimes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
            />

            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              value={formData.occasion}
              onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
            >
              <option>None</option>
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>

            <input style={{ margin: "0 auto" }} id="booking-button" type="submit" value="Make Your reservation" />
          </section>
        ) : (
          <section className="first-step" style={{ display: "grid", maxWidth: "300px", gap: "20px", marginTop: "30px" }}>
            <h2 style={{ fontSize: "20px" }}>We first need your contact details.</h2>

            <label htmlFor="res-name">Full name {required}</label>
            <input
              type="text"
              placeholder="John Doe"
              id="res-name"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              required
            />

            <label htmlFor="res-phone">Phone number {required}</label>
            <input
              type="tel"
              placeholder="123-456-7890"
              id="res-phone"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
              required
            />

            <label htmlFor="res-email">Email {required}</label>
            <input
              type="email"
              placeholder="hello@little-lemon.com"
              id="res-email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />

            <button style={{ margin: "0 auto" }} id="booking-button" onClick={handleNextStep}>
              Next Step
            </button>
          </section>
        )}
      </form>
    </section>
  );
};

export default BookingForm;