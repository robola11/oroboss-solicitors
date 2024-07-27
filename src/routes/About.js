import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutInfo from "../components/AboutInfo";
import Footer from "../components/Footer";
import AboutImg from "../assets/image/law.avif";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Oroboss Solicitors"
        text="Barristers & Solicitors of the Supreme Court of Nigeria"
        btnText="Make An Appointment"
        url="/contact"
        btnClass="show"
      />
      <AboutInfo />
      <Footer />
    </>
  );
}
export default About;
