import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ContactImg from "../assets/image/law.avif";
import ContactForm from "../components/ContactForm";
function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ContactImg}
        title="Oroboss Solicitors"
        text= "Barristers & Solicitors of the Supreme Court of Nigeria"
        btnText="Make An Appointment"
        url="/contact"
        btnClass="show"
      />

      <ContactForm />
      <Footer />
    </>
  );
}
export default Contact;
