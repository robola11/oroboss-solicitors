import "./TripStyles.css";

function FirstData(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="card" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
      <a href={props.url} className={props.btnClass}>
            {props.btnText}
          </a>
    </div>
  );
}
export default FirstData;