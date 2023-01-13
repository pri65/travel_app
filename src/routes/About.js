import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import AboutImg from '../assets/night.jpg'

const About = () => {
  return (
    <div>
      <Navbar />
        <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About"
        btnClass="hide"
        />
    </div>
  )
}

export default About