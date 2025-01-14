import "./BoutonContext.css";
// import { useXboxMode } from "../../UseContext/ThemeMode";

export default function BoutonContext() {
  // const { theme, setTheme } = useXboxMode();

  // const toggleTheme = () => {
  //   setTheme((prevTheme) =>
  //     prevTheme === "XboxMode" ? "DefaultMode" : "XboxMode",
  //   );
  // };

  return (
    <div className="toggle-container">
      <input
        className="toggle-input"
        type="checkbox"
        // onChange={toggleTheme}
        // checked={theme === "XboxMode"}
      />
      <div className="toggle-handle-wrapper">
        <div className="toggle-handle">
          <div className="toggle-handle-knob" />
          <div className="toggle-handle-bar-wrapper">
            <div className="toggle-handle-bar" />
          </div>
        </div>
      </div>
      <div className="toggle-base">
        <div className="toggle-base-inside" />
      </div>
    </div>
  );
}
