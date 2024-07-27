import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import PracticeImg from "../assets/image/law.avif";

function Practice() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={PracticeImg}
        title="Oroboss Solicitors"
        text= "Barristers & Solicitors of the Supreme Court of Nigeria"
        btnText="Make An Appointment"
        url="/contact"
        btnClass="show"
      />
      <input type="text" className="seach" placeholder="search here" />
      <Trip />
      <Footer />
    </>
  );
}
export default Practice;