import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero
        cName="hero"
        heroImg=""
        title="your Journey Your Story"
        text="Choose your Favourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
        />
    </div>
  )
}

export default Home;