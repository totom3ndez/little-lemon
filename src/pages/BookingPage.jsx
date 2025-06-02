import { useReducer } from 'react';
import BookingForm from '../components/BookingForm'

const BookingPage = () => {

 
  const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  function timesReducer(state, action) {
    switch (action.type) {
      case 'UPDATE_TIMES':
        return state.filter(time => time !== action.payload);
      case 'INITIALIZE':
        return initialState;
      default:
        return state;
    }
  }


  const [availableTimes, dispatch] = useReducer(timesReducer, initialState);

  function updateTimes(selectedTime) {
    dispatch({ type: 'UPDATE_TIMES', payload: selectedTime });
  }
  function initializeTimes() {
    dispatch({ type: 'INITIALIZE' });
  }

  return (
    <section id="booking-page">
      <div className="hero-text">
      <h1>Reserve a table</h1>
      <p>Book your table online for a delightful dining experience.</p>
      </div>
    <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} initializeTimes={initializeTimes}/>
    </section>
  )
}

export default BookingPage