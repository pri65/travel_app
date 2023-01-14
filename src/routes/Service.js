import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import AboutImg from '../assets/1.jpg';
import Footer from '../components/Footer';
import Trip from '../components/Trip';

const Service = () => {
  return (
    <div>
      <Navbar />
        <Hero
        cName="hero"
        heroImg={AboutImg}
        title="Service"
        btnClass="hide"
        />
        <Trip />
        <Footer />
    </div>
  )
}

export default Service