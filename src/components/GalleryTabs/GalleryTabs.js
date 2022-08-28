import React from "react";
import { GalleryTabsWrapper } from "./GalleryTabs.styles";
import { isMobile } from "react-device-detect";

function GalleryTabs({ mode, setMode }) {
  return (
    <GalleryTabsWrapper>
      <div
        style={{
          width: "65px",
          height: "140px",
          backgroundColor: "#fff",
          position: "fixed",
          zIndex: "1",
          right: 0,
          borderRadius: "10px 0px 0px 10px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
        className="d-flex flex-column align-items-center justify-content-center py-4"
      >
        <i
          style={{
            color: mode === "image" && "#007965",
          }}
          onClick={() => setMode("image")}
          className="fa-solid fa-image  fs-3"
        ></i>
        <i
          style={{
            color: mode === "video" && "#ff2442",
          }}
          onClick={() => setMode("video")}
          className="fa-solid fa-clapperboard mt-3 fs-3"
        ></i>
        {!isMobile && (
          <i
            style={{
              color: mode === "scanner" && "#10c9c3",
            }}
            onClick={() => setMode("scanner")}
            class="fa-solid fa-qrcode mt-3 fs-3"
          ></i>
        )}
      </div>
    </GalleryTabsWrapper>
  );
}

export default GalleryTabs;
