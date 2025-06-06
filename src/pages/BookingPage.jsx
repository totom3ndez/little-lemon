import { useReducer } from 'react';
import BookingForm from '../components/BookingForm'
import { fetchAPI, submitAPI } from '../data/api'
import { useNavigate } from 'react-router-dom';

const BookingPage = () => {

 
  const initialState = fetchAPI(new Date());
  function timesReducer(state, action) {
    switch (action.type) {
      case 'UPDATE_TIMES':
        return action.payload;
      case 'INITIALIZE':
        return initialState;
      default:
        return state;
    }
  }


  const [availableTimes, dispatch] = useReducer(timesReducer, initialState);

  function updateTimes(selectedDate) {
    dispatch({ type: 'UPDATE_TIMES', payload: fetchAPI(selectedDate) });
  }
  function initializeTimes() {
    dispatch({ type: 'INITIALIZE' });
  }

  const navigate = useNavigate();

  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate('/confirmed-booking');
      initializeTimes();
    }
  };

  return (
    <section id="booking-page">
      <div className="hero-text">
      <h1>Reserve a table</h1>
      <p>Book your table online for a delightful dining experience.</p>
      </div>
    <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} initializeTimes={initializeTimes} submitForm={submitForm}/>
    </section>
  )
}

export default BookingPage