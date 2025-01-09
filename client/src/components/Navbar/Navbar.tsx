import "./NavBar.css";
import Checkbox from "./Checkbox";

export default function NavBar() {
  return (
    <nav>
      <Checkbox />

      <div className="logos_reseaux">
        <img src="/public/Logos_réseaux_sociaux/Insta.png" alt="instagram" />
        <img src="/public/Logos_réseaux_sociaux/Linkedin.png" alt="linkedin" />
        <img src="/public/Logos_réseaux_sociaux/X.png" alt="X" />
      </div>
    </nav>
  );
}
