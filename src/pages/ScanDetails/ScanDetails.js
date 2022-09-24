import React from "react";
import { useLocation } from "react-router-dom";
import notFound from "../../assets/notfound.svg";

function ScanDetails({ qrCode }) {
  const { state } = useLocation();
  const { qrCode: qrCodeFromState } = state || {};

  return (
    <div>
      {!qrCodeFromState && (
        <div className="my-5">
          <div className="container">
            <h1 className="text-center">Not Result Found</h1>
            <div className="d-flex justify-content-center mt-5">
              <img width={400} src={notFound} alt="not found" />
            </div>
          </div>
        </div>
      )}
      {qrCodeFromState && (
        <div className="container my-5">
          <h1>{qrCodeFromState.title}</h1>

          <div className="row">
            <div className="col-md-6 ">
              <img
                className="img-fluid mb-4 mt-2 rounded-3 shadow"
                src={qrCodeFromState.banner.fields.file.url}
                alt="banner"
              />
            </div>
            <div className="col-12 col-md-10">
              <p className="text-muted">{qrCodeFromState.description}</p>
            </div>
            <div className="col-10 mt-2">
              <a
                href={qrCodeFromState.link}
                className="btn btn-primary rounded-0"
              >
                More details
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ScanDetails;
