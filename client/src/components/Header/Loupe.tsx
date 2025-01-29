import "./Loupe.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Loupe() {
  const [formSearch, setFormSearch] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(false);
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

  const toggleInputVisibility = () => {
    setIsInputVisible((prevState) => !prevState);
  };

  return (
    <div className="input-wrapper">
      <form onSubmit={sendSearchForm}>
        <button type="button" className="icon" onClick={toggleInputVisibility}>
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Loupe</title>
            <path
              d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 22L20 20"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {isInputVisible && (
          <input
            type="text"
            name="text"
            value={formSearch}
            className="input"
            placeholder="Find a game ..."
            onChange={handleChangeSearchForm}
          />
        )}
      </form>
    </div>
  );
}
