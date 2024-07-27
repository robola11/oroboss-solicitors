import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import ArticleImg from "../assets/image/law.avif";

function Article() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ArticleImg}
        title="Oroboss Solicitors"
        text= "Barristers & Solicitors of the Supreme Court of Nigeria"
        btnText="Make An Appointment"
        url="/contact"
        btnClass="show"
      />
      <Trip />
      <Footer />
    </>
  );
}
export default Article;
