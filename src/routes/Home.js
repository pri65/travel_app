import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import AboutImg from '../assets/12.jpg';
import Destination from '../components/Destination';
import Trip from '../components/Trip';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero
        cName="hero"
        heroImg={AboutImg}
        title="your Journey Your Story"
        text="Choose your Favourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
        />
        <Destination />
        <Trip />
        <Footer />
    </div>
  )
}

export default Home;