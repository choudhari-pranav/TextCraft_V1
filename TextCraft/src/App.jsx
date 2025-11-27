import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import Alert from "./Components/Alert";
import Footer from "./Components/Footer";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({ msg: message, type });
  };

  return (
    <>
      <Navbar
        title="TextCraft"
        AboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />

      <Alert alert={alert} />

      <div className="container my-3"></div>

      <Routes>
        <Route
          path="/"
          element={
            <TextForm
              showAlert={showAlert}
              heading="Enter the text below To Analyze.."
              mode={mode}
            />
          }
        />

        <Route path="/about" element={<About mode={mode} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
