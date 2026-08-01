import Hero from "./components/Hero/Hero"
import Navbar from "./components/navbar/navbar"
import DestinationSection from "./components/Destination/DestinationSection"
import ServiceCard from "./components/Services/ServiceCard"
import ServicesSection from "./components/Services/ServicesSection"
import AboutSection from "./components/About/AboutSection"
import ContactSection from "./components/Contact/ContactSection"
import FooterSection from "./components/Footer/FooterSection"


function App() {                                                                     

  return (
    <>
<Navbar/>
<Hero/>
<DestinationSection/>
<ServicesSection/>
<AboutSection/>
<ContactSection/>
<FooterSection/>
</>
  )
}

export default App
