import "./Header.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Checkbox from "./Checkbox";

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
      <Checkbox />

      <img className="logoHeader" src="/public/images/logo.webp" alt="logo" />

      <h1>Wild Games</h1>
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
    </header>
  );
}
