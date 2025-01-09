import { useState } from "react";
import { Link } from "react-router-dom";
import "./Checkbox.css";

const Checkbox = () => {
  const [isOpen, setIsOpen] = useState(false);

  // fonction pour ouvrir/fermer le menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyUp = (event: React.KeyboardEvent<SVGSVGElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      toggleMenu();
    }
  };

  return (
    <>
      <label className="hamburger">
        <input type="checkbox" />
        <svg
          viewBox="0 0 32 32"
          className={isOpen ? "line open" : "line"}
          onClick={toggleMenu}
          onKeyUp={handleKeyUp}
        >
          <title id="svgTitle">A description of the SVG content</title>
          <path
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            className="line line-top-bottom"
          />
          <path d="M7 16 27 16" className="line" />
        </svg>
        {isOpen && (
          <div className={`menu ${isOpen ? "open" : ""}`}>
            <ul>
              <li>
                <Link to="/">Homepage</Link>
              </li>
              <li>
                <Link to="/NewGames">NewGames</Link>
              </li>
              <li>
                <Link to="/Catalogue">Catalogue</Link>
              </li>
              <li>
                <Link to="/Calendrier">Calendrier</Link>
              </li>
            </ul>
          </div>
        )}
      </label>
    </>
  );
};

export default Checkbox;
