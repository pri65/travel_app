import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import AboutImg from '../assets/2.jpg';

const Contact = () => {
  return (
    <div>
      <Navbar />
        <Hero
        cName="hero"
        heroImg={AboutImg}
        title="Contact"
        text="Choose your Favourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
        />
    </div>
  )
}

export default Contact