import "./App.css";
import { Outlet } from "react-router-dom";
// import { XboxModeProvider, useXboxMode } from "./UseContext/ThemeMode";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/Navbar";

function App() {
  return (
    // <XboxModeProvider>
    <AppContent />
    // </XboxModeProvider>
  );
}

function AppContent() {
  // const { theme } = useXboxMode(); // Accéder au thème et à la fonction pour le modifier

  // Appliquer la couleur de fond en fonction du thème
  // const backgroundColor = theme === "XboxMode" ? "#107C10" : "#FFF"; // Couleur d'exemple (vous pouvez les changer)
  // document.body.style.backgroundColor = backgroundColor;

  return (
    <>
      <Header />
      <main className="outlet">
        <NavBar />
        <Outlet />
      </main>
    </>
  );
}

export default App;
