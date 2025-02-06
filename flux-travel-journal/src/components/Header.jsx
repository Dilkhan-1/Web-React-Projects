import globe from "../assets/Globe.svg";
import "../index.css";

export default function Header() {
  return (
    <>
      <div className="container">
        <img src={globe} alt="Globe image" />
        <span>Flux Travel Journal</span>
      </div>
    </>
  );
}
