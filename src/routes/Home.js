import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeImg from "../assets/image/law.avif";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";


function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={HomeImg}
        title="Oroboss Solicitors"
        text="Barristers & Solicitors of the Supreme Court of Nigeria"
        btnText="Make An Appointment"
        url="/contact"
        btnClass="show"
      />
      
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}
export default Home;
