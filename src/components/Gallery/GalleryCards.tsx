import React, { FC } from "react";
import "./GalleryCards.css";
import { Gallery } from "../../types/GalleryTypes";
import { Card } from "antd";
import Loader from "../Loader/Loader";
import GalleryError from "./GalleryError";

interface GalleryProps {
  gallery: Gallery[];
  isLoading: boolean;
  error: any;
}

const GalleryCards: FC<GalleryProps> = ({ gallery, isLoading, error }) => {
    if (error) {
       return <h1>Error</h1>
    }
  return (
    <div className="gallery-container">
      {isLoading ? (
        <Loader />
      ) : (
        gallery.map((photo) => {
          return (
            <div className="gallery-card-container" key={photo.id}>
              <Card
                size="small"
                title={photo.user.first_name + "" + photo.user.last_name}
                hoverable={true}
                type={"inner"}
              >
                <img
                  style={{ maxHeight: 200, width: "100%" }}
                  src={photo.urls.full}
                  alt=""
                />
                <div className="random-photo-name">{photo.description}</div>
              </Card>
            </div>
          );
        })
      )}
    </div>
  );
};

export default GalleryCards;
