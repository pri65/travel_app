import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import AboutImg from '../assets/2.jpg';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div>
      <Navbar />
        <Hero
        cName="hero"
        heroImg={AboutImg}
        title="Contact"
        btnClass="hide"
        />
        <ContactForm />
        <Footer />
    </div>
  )
}

export default Contact