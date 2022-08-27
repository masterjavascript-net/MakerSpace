// import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Helmet } from "react-helmet";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Helmet>
        <script
          src="https://kit.fontawesome.com/0071b47268.js"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <div className="sticky-top">
        <Navbar />
      </div>

      <Footer />
    </div>
  );
}

export default App;
