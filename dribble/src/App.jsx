import React from 'react';
import Navbar from './components/navbar/Navbar/';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;

