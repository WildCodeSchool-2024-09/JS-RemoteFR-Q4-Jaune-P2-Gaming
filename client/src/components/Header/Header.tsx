import "./Header.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import SwitchButton from "../SwitchButton/SwitchButton";
import Checkbox from "./Checkbox";
import Loupe from "./Loupe";

export default function Header() {
  const [formSearch, setFormSearch] = useState("");

  const navigate = useNavigate();

  const sendSearchForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/Results/${formSearch}`);
  };

  const handleChangeSearchForm = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFormSearch(event.currentTarget.value);
  };

  return (
    <header>
      <div className="logo_title">
        <div className="menuburger">
          <Checkbox />
        </div>
        <img className="logoHeader" src="/public/images/logo.webp" alt="logo" />

        <h1>
          <Link to="/">Wild Games</Link>
        </h1>

        <div className="loupe">
          <Loupe />
        </div>
      </div>

      <div className="search">
        <form onSubmit={sendSearchForm}>
          <input
            name="myInput"
            value={formSearch}
            type="text"
            placeholder="Find a game ..."
            onChange={handleChangeSearchForm}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="switch">
        <SwitchButton />
      </div>
    </header>
  );
}
