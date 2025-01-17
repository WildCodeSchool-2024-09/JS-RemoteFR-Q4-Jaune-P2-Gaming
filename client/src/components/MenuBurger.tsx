// import { useState } from "react";
// import "./MenuBurger.css";

// const BurgerMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="burger-menu">
//       {"X"}
//       <div
//         className={`burger-icon ${isOpen ? "open" : ""}`}
//         onClick={toggleMenu}
//       >
//         <div></div>
//         <div></div>
//         <div></div>
//       </div>

//       {/* Menu */}
//       <div className={`menu ${isOpen ? "show" : ""}`}>
//         <ul>
//           <li>
//             <a href="#home">Home</a>
//           </li>
//           <li>
//             <a href="#about">About</a>
//           </li>
//           <li>
//             <a href="#services">Services</a>
//           </li>
//           <li>
//             <a href="#contact">Contact</a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default BurgerMenu;
