import React, { useEffect, useState } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import PhotoSwipe from "photoswipe";
import "photoswipe/style.css";
import { getContent } from "../../helpers/contentful.api";
import { GalleryWrapper } from "./Gallery.styles";
import { shuffleArray } from "../../utils/utils";
import GalleryTabs from "../GalleryTabs/GalleryTabs";

const promiseContent = getContent();

function Gallery() {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [mode, setMode] = useState("image");

  useEffect(() => {
    promiseContent
      .then((content) => {
        setLoading(false);
        content.items.forEach((item) => {
          if (item.fields.type === "image") {
            setImages((i) => [...i, item.fields]);
          }

          if (item.fields.type === "video") {
            setVideos((v) => [...v, item.fields.videoUrl]);
          }

          setLoading(false);
        });
      })
      .catch((error) => {
        setError(true);
      });
  }, []);

  const mixedArray = [...images, ...videos];
  shuffleArray(mixedArray);

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#gallery",
      children: "a",
      pswpModule: PhotoSwipe,
    });

    lightbox.init();
  }, []);

  return (
    <GalleryWrapper>
      <div className="row" id="gallery">
        <GalleryTabs mode={mode} setMode={setMode} />
        {mode === "image" &&
          images.map((image, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 p-0">
              <div className="gallery-item">
                <div
                  style={{
                    backgroundImage: `url(${image.imageFile.fields.file.url})`,
                    height: "360px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>

                <div className="gallery-item-hover">
                  <a
                    href={image.imageFile.fields.file.url}
                    data-pswp-src={image.imageFile.fields.file.url}
                    data-pswp-width={
                      image.imageFile.fields.file.details.image.width
                    }
                    data-pswp-height={
                      image.imageFile.fields.file.details.image.height
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="position-relative"
                  >
                    <i class="fa-solid fa-rocket"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        {mode === "video" &&
          videos.map((video, index) => (
            <div className="col-12 col-sm-6 col-md-4 p-0" key={index}>
              <iframe
                width="100%"
                height="360px"
                src={video.split(".be/").join("be.com/embed/")}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
      </div>
    </GalleryWrapper>
  );
}

export default Gallery;