import pin from "../assets/marker.svg";

export default function Card(props) {
  return (
    <div className="card-container">
      <div className="main-img">
        <img src={props.img.src} alt={props.img.alt} />
      </div>
      <div className="info">
        <img className="pin" src={pin} alt="location" />
        <span className="countryName">{props.country}</span>
        <a className="link" href={props.googleMapsLink}>View on Google Maps</a>
        <h2>{props.title}</h2>
        <p className="date">{props.dates}</p>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
