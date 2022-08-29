import React, { useCallback } from "react";
import { QrScannerWrapper } from "./QrScanner.styles";
import { QrReader } from "react-qr-reader";
import { Link, useNavigate } from "react-router-dom";
import useSound from "use-sound";
import sound from "../../sounds/click.mp3";
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";

function QrScanner() {
  let navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [play] = useSound(sound);

  const handleScan = (result) => {
    if (result !== undefined) {
      setLoading(true);
      setTimeout(() => {
        navigate("/scandetails", { state: { qrCode: result?.text } });
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
              width: "350px",
              height: "350px",
            }}
          >
            <QrReader
              containerStyle={{
                marginTop: "-80px",
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
