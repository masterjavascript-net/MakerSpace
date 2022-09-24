import React, { useCallback } from "react";
import { QrScannerWrapper } from "./QrScanner.styles";
import { QrReader } from "react-qr-reader";
import { Link, useNavigate } from "react-router-dom";
import useSound from "use-sound";
import sound from "../../sounds/click.mp3";
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";
import Lottie from "lottie-react";
import qrAnimation from "../../assets/lottie files/41671-scan.json";

function QrScanner({ content }) {
  const data = content
    .filter((item) => item.fields.type === "sobject")
    .map((item) => item.fields);

  let navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [play] = useSound(sound);

  const handleScan = (result) => {
    if (result !== undefined) {
      setLoading(true);
      setTimeout(() => {
        const searchResult = data.find((item) => item.id === result?.text);
        navigate("/scandetails", { state: { qrCode: searchResult } });
      }, 2000);
    }
  };

  const particlesInit = useCallback(async (engine) => {
    await loadStarsPreset(engine);
  }, []);

  const options = {
    preset: "stars",
  };

  return (
    <QrScannerWrapper>
      <Particles id="tsparticles" options={options} init={particlesInit} />
      <Link to="/">
        <i className="fa-solid fa-arrow-left"></i>
      </Link>
      <div className="qr-scanner">
        {loading && play()}
        {loading && (
          <span
            style={{
              marginTop: "-100px",
            }}
            class="loader"
          ></span>
        )}
        {!loading && (
          <div
            style={{
              minWidth: "300px",
              minHeight: "350px",
            }}
          >
            <Lottie
              style={{
                position: "absolute",
                transform: "translate(0%,-18%)",
                zIndex: "1",
              }}
              animationData={qrAnimation}
              loop={true}
              width="100%"
            />
            <QrReader
              videoContainerStyle={{
                width: "100%",
              }}
              containerStyle={{
                marginTop: "-80px",
                width: "100%",
              }}
              constraints={{
                audio: true,
                facingMode: "environment",
              }}
              onResult={(result) => {
                handleScan(result);
              }}
            />
          </div>
        )}
      </div>
    </QrScannerWrapper>
  );
}

export default QrScanner;
