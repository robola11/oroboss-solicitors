import dest_img1 from "../assets/image/law1.jpg";
import dest_img2 from "../assets/image/img1.jpg";
import dest_img3 from "../assets/image/img3.jpg";
import dest_img4 from "../assets/image/img2.jpg";
import Destinationdata from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Welcome to Oroboss Solicitors</h1>
      <p>General Legal Practitioners & Property Consultants</p>
      <Destinationdata
        className="first-des"
        heading="What We Are"
        text="At Oroboss Solicitors, we are Legal Practitioners and Property Consultants who have
         established ourselves as one of the leading law firms in our areas of practice.
          Our firm offers legal services across board but our strength lies in litigation, 
        dispute resolution and property management and consultancy.
        Our Lawyers are of diverse background and specialised in alot of areas and are skilled in
         the use of information technology in legal practice, thus we are ever ready for 
         legal practice in the modern world.
        Our Clients include Corporations and individuals, and our staff are highly motivated to
        serve our Clients with utmost professionalism to ensure their satisfaction."
        img1={dest_img1}
        img2={dest_img2}
      />

      <Destinationdata
        className="first-des-reverse"
        heading="What We Do"
        text="At Oroboss Solicitors, We have been involved in legal practice in Nigeria 
         over the years and have garnered large experience in litigation whether civil or criminal
         and dispute resolution including Alternative Dispute Resolution (ADR).
         We are knowledgable in areas and sectors within which our Clients operate 
         and we are thus able to service our Clients with precision for their needs whether
         commercial or corporate. At Oroboss Solicitors, all our Clients can expect the highest level of 
         professional service as we always strive for excellence in all our dealings with our Clients.
         Get in touch with our attorneys through our contact form or via the email or phone numbers provided." 
        img1={dest_img3}
        img2={dest_img4}
      />
    </div>
  );
};
export default Destination;
