import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/image/law1.png";
import Trip2 from "../assets/image/law10.jpg";
import Trip3 from "../assets/image/lawbg3.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Practice Areas</h1>
      <p style={{textAlign:"center"}}>Our General Areas Of Practice At Oroboss Solicitors</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Litigation and Dispute Resolution"
          text="Our firm undertakes matters for its clients in courts
          across Nigeria. Our objective is to ensure that
          disputes arising from the  activities of our clients are 
          resolved satsfactorily and in the interest of our Clients.
          Our firm undertakes arbitration as well as alternative dispute resolution (ADR) 
          measures, on behalf of our clients especially in areas of breach of contract and others."
        />
        <TripData
          image={Trip2}
          heading="Property Management and Consultancy"
          text="At Oroboss Solicitors, we do property management and consultancy
           for and on behalf of our Clients. We interface between our Clients
            (Property Owners) and the occupants of such property for the efficient
             facilitation of their contractual relationship. We also offer legal advice to our Clients desirous 
             of acquiring real property any where in Nigeria."
        />
        <TripData
          image={Trip3}
          heading="Intellectual Property And Technology"
          text="Our Firm works with clients for the development of and protection of their
           intellectual property and assets. We offer services which
            include registration of intellectual property for our Clients and leverage
             on the use of technology for efficient and fast-paced service delivery.
            Our firm has the penchant for rendering efficient, time-conscious
            and quality professional representations in its practice."
        />
      </div>
    </div>
  );
}
export default Trip;
