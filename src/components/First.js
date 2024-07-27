import "./TripStyles.css";
import FirstData from "./FirstData";
import Trip1 from "../assets/image/img1.jpg";
import Trip2 from "../assets/image/law1.png";
import Trip3 from "../assets/image/law10.jpg";

function First() {
  return (
    <div className="trip">
      <h1>Welcome To Our Website</h1>
      <p style={{textAlign:"center"}}>We Are General Legal Practitioners & Property Consultants</p>
      <div className="tripcard">
        <FirstData
          image={Trip1}
          heading="Who We Are"
          text="Vestibulum ullamcorper mauris at ligula. 
          Vivamus laoreet. Praesent ut ligula non mi varius
          sagittis. Sed lectus. Phasellus consectetuer
          vestibulum elit.Donec posuere vulputate arcu.
          Quisque ut nisi. Curabitur ullamcorper ultricies nisi.
          In dui magna, posuere eget, vestibulum et, tempor auctor."
          btnText="Read More >>"
          url="/"
          btnClass="show"
        />
        <FirstData
          image={Trip2}
          heading="What We Do"
          text="Vestibulum ullamcorper mauris at ligula. 
          Vivamus laoreet. Praesent ut ligula non mi varius
          sagittis. Sed lectus. Phasellus consectetuer
          vestibulum elit.Donec posuere vulputate arcu.
          Quisque ut nisi. Curabitur ullamcorper ultricies nisi.
          In dui magna, posuere eget, vestibulum et, tempor auctor."
          btnText="Read More >>"
          url="/"
          btnClass="show"
        />
        <FirstData
          image={Trip3}
          heading="Practice Areas"
          text="Our practice areas include Corporate & Commercial Law,
           Shipping & Maritime Law, Oil & Gas Law, Family Law, Power
            & Mining Law, Labour And Employment Law,Immigration Law, Personal Injury."
          btnText="Read More >>"
          url="/practice"
          btnClass="show"
        />
      </div>
    </div>
  );
}
export default First;
