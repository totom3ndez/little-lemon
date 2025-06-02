import { useState } from "react";


const BookingForm = ({ availableTimes, updateTimes, initializeTimes}) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [filledContact, setFilledContact] = useState(false);

  const required = <sup style={{color: '#ea3c30', fontWeight: 'bold'}}>*</sup>

  const clearForm = () => {
    setFullName('');
    setPhoneNumber('');
    setEmail('');
    setDate('');
    setTime('');
    setGuests(1);
    setOccasion('None');
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !phoneNumber || !email || !date || !time ) {
      alert('Please fill in all required fields.');
      return;
    }
    const reservationDetails = {
      fullName,
      phoneNumber,
      email,
      date,
      time,
      guests,
      occasion
    };
    updateTimes(time);
    console.log('Reservation Details:', reservationDetails);
    alert('Your reservation has been made successfully!');
    clearForm();
    setFilledContact(false);
  }

  const handlePreviusStep = (e) => {
    e.preventDefault();
    setFilledContact(false);
  }

  const handleNextStep = (e) => {
    e.preventDefault();
    if (!fullName || !phoneNumber || !email) {
      alert('Please fill in all contact details before proceeding.');
      return;
    }
    setFilledContact(true);
  }

  return (
    <section id="booking-page" style={{padding: '20px'}}>
        <form
          onSubmit={handleSubmit}>
            { filledContact
            ?
              <section className="second-step" style={{
              display: 'grid',
              maxWidth: '300px',
              gap: '20px',
              marginTop: '30px'}}>
            <button style={{margin: '0 auto'}} id="booking-button" onClick={handlePreviusStep}>Previous Step</button>
            <h2 style={{fontSize: '20px'}}>Now we need your reservation details.</h2>

            <label htmlFor="res-date">Choose date {required}</label>
            <input type="date" id="res-date" value={date} onChange={(e) => {
              setDate(e.target.value)
              initializeTimes();
            }} required/>
            <label htmlFor="res-time">Choose time {required}</label>
            <select id="res-time" value={time} onChange={(e) => {setTime(e.target.value)}} required>
                <option value="">Select a time</option>
                {availableTimes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => {setGuests(e.target.value)}}/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => {setOccasion(e.target.value)}}>
                <option>None</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input style={{margin: '0 auto'}} id="booking-button" type="submit" value="Make Your reservation" />
            </section>
            :
            <section className="first-step" style={{
            display: 'grid',
            maxWidth: '300px',
            gap: '20px',
            marginTop: '30px'}}>
            <h2 style={{fontSize: '20px'}}>We first need your contact details.</h2>
            <label htmlFor="res-name">Full name {required}</label>
            <input type="text" placeholder="John Doe" id="res-name" value={fullName} onChange={(e) => {setFullName(e.target.value)}}  required/>
            <label htmlFor="res-phone">Phone number {required}</label>
            <input type="tel" placeholder="123-456-7890" id="res-phone" value={phoneNumber} onChange={(e) => {setPhoneNumber(e.target.value)}} required/>
            <label htmlFor="res-email">Email {required}</label>
            <input type="email" placeholder="hello@little-lemon.com" id="res-email" value={email} onChange={(e) => {setEmail(e.target.value)}} required/>
            <button style={{margin: '0 auto'}} id="booking-button" onClick={handleNextStep}>Next Step</button>
            </section>
            }
        </form>
      </section>
  )
}

export default BookingForm