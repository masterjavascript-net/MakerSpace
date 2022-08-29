import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Helmet } from "react-helmet";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import { getContent } from "./helpers/contentful.api";
import Loading from "./components/Loading/Loading";
import Subscribe from "./components/Subscribe/Subscribe";
import QrScanner from "./pages/QrScanner";
import ScanDetails from "./pages/ScanDetails";

const promiseContent = getContent();

function App() {
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    promiseContent
      .then((content) => {
        setContent(content.items);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <Helmet>
        <script
          src="https://kit.fontawesome.com/0071b47268.js"
          crossorigin="anonymous"
        ></script>
        <link
          rel="stylesheet"
          href="https://s.pageclip.co/v1/pageclip.css"
          media="screen"
        />
      </Helmet>

      {!loading && (
        <>
          {location.pathname !== "/qrscanner" && (
            <div className="sticky-top">
              <Navbar setIsOpen={setIsOpen} />
            </div>
          )}
          <Subscribe isOpen={modalIsOpen} setIsOpen={setIsOpen} />
          <Routes>
            <Route path="/" element={<Home content={content} />} />
            <Route path="/contact" element={<Contact content={content} />} />
            <Route
              path="/qrscanner"
              element={<QrScanner content={content} />}
            />
            <Route path="/scandetails" element={<ScanDetails />} />
          </Routes>

          {location.pathname !== "/qrscanner" && <Footer content={content} />}
        </>
      )}

      {loading && <Loading />}
    </div>
  );
}

export default App;
