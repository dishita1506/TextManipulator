//API --> Application programming interface (Koi bhi app/software apne functions ko expose krta hai jisko hum use krte hai apne liye )
//1.React is javascript library or framework
//2.It works on 2 components class based component and function based component (function based component is mostly used)
//3. It is used for single page application (agr hum ek website pr gye fir hume uske about page ko kholna hai to home page firse reload nhi hoga balki whi page kai contents change honge dynamically API k through)
//4. React create virtual DOM in memory despite changing DOM in browser
//5. React finds out what changes have been made, and changes only what needs to be changed.
//6. It is componenet based library due to which it is easy to change or reuse particular component of website
//7. <></> ---> react fragments (humko hamesha single tag he return krna hota hai agr 1 s jada tags hai to hum react fragments ka use krte hai)
//8. React is written in JSX (Javascript and xml) --> it is extended form of JS basically html
//9. React m har ek tag close hoga like <img/> , <input/>
//10. ctrl+f for replacing

//REACT ROUTER
//1. React Router is a standard library for routing in React.
//2. It is used to navigate to different components of application 
//3. we have website that contains home,about ,contact to teeno m header footer same rahega to react router home,about,contact component pr navigate karega and header-footer whi rahenge
//4. The major advantage of react-router is that the page does not have to be refreshed when a link to another page is clicked, for example. Moreover, it is fast, very fast compared to traditional page navigation.  

import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Is is use to set whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#10223d";
      showAlert("Dark Mode has been Enabled", "success");
      // document.title = "textManipulator-Dark Mode";

      // setInterval(()=>{
      //   document.title="textManipulator is amazing";
      // },2000)
      // setInterval(()=>{
      //   document.title="Install textManipulator now";
      // },1500)
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "success");
      // document.title = "textManipulator-Light Mode";
    }
  };

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <Router>
      <Navbar title="textManipulator" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      {/* USING REACT ROUTER */}

      <Routes>

        {/* React uses partial searching if there is endpoint called /user and /user/product   whenever you fire request /user or /user/product  it will redirect you to /user only to make it exact we uses 'exact' keyword*/}
        <Route  exact path="/about" element={<About  mode={mode}/>}  />
        <Route  exact path="/" element={<Form heading=" Try textManipulator -Word counter, Character counter, reverse" mode={mode} showAlert={showAlert}/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
