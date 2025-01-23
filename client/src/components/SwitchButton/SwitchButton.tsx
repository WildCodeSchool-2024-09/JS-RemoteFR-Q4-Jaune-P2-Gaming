import "./SwitchButton.css";
import { useDarkTheme } from "../../services/XboxThemeContext";

export default function SwitchButton() {
  const { xboxTheme, setXboxTheme } = useDarkTheme();
  const switchMode = () => {
    setXboxTheme(!xboxTheme);
  };

  return (
    <div className="toggle-container">
      <input onClick={switchMode} className="toggle-input" type="checkbox" />
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
