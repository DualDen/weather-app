import React, { FC } from "react";
import { Card } from "antd";
import { RandomPhoto } from "../../types/RandomPhotoTypes";
import "./RandomPhotoCard.css"

interface RandomPhotoCardProps {
  randomPhoto: RandomPhoto;
  isRandomLoading: boolean;
}

const RandomPhotoCard: FC<RandomPhotoCardProps> = ({randomPhoto,isRandomLoading}) => {
  return (
    <div className="random-photo-container">
      <Card
        loading={isRandomLoading}
        size="small"
        title={randomPhoto.user.first_name + "" + randomPhoto.user.last_name}
      >
        <img
          style={{ maxHeight: 400, width: "100%" }}
          src={randomPhoto.urls.full}
          alt=""
        />
        <div className="random-photo-name">{randomPhoto.alt_description}</div>
      </Card>
    </div>
  );
};

export default RandomPhotoCard;
