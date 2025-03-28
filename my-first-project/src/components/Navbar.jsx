/**
 * Challenge: complete the Navbar to match the Figma design
 *
 * Hints:
 * - for semantic HTML purposes, the Navbar should render
 *   a <header> with a <nav> nested inside. The image and "ReactFacts"
 *   text elements can both be rendered as children inside the <nav>
 * - reference the Figma design for the most accurate info about
 *   colors, sizes, font information, etc.
 */
import reactLogo from "../assets/reactjs-icon.png";
import "../styles.css";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <img src={reactLogo} alt="react-logo" />
        <p>ReactFacts</p>
      </nav>
    </header>
  );
}
