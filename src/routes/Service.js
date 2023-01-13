import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import AboutImg from '../assets/1.jpg';

const Service = () => {
  return (
    <div>
      <Navbar />
        <Hero
        cName="hero"
        heroImg={AboutImg}
        title="Service"
        text="Choose your Favourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
        />
    </div>
  )
}

export default Service