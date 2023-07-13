// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";
import React, { useState } from "react";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// https://v5.reactrouter.com/web/guides/quick-start use this site

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      showAlert("Dark mode has been enabled!", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled!", "success");
    }
  };
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      {/* <Router> */}
        <Navbar title="Text Utils" mode={mode} togglemode={togglemode}></Navbar>
        <Alert alert={alert} />

        <div className="container">
          {/* <Routes> */}
            {/* /users/   component 1
      /users/home component 2 */}
            {/* <Route exact path="/about" element={<About />} /> */}
            {/* <Route
              exact
              path="/"
              element={ */}
                <TextForm
                  heading="Enter the text to analyze"
                  mode={mode}
                  showAlert={showAlert}
                ></TextForm>
              {/* }
            /> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
// props are nothing but properties which we pass like above title in Navbar


///github pe deployment

//first of all command in terminal npm run build
//it creates folder named build
//hum ess build folder ko vscode me kholkar if liveserver bhi on karenge to website chalegi
//eska matlab ki hum ess build folder ko kaha bhi only deploy karke apni app/website run karwa sakte hai