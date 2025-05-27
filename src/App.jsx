import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout'
import Main from './pages/Main';
import BookingPage from './pages/BookingPage';
import Menu from './pages/Menu';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="booking" element={<BookingPage />} />
          <Route path="menu" element={<Menu />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
