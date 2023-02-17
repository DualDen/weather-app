import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchRandomPhoto } from "../../store/reducers/action-creators/RandomPhotoActionCreator";
import "./GalleryPage.css";
import { Button, Card, Input } from "antd";
import { fetchGallery } from "../../store/reducers/action-creators/GalleryActionCreator";
import RandomPhotoCard from "../../components/RandomPhotoCard/RandomPhotoCard";
import Gallery from "../../components/Gallery/Gallery";

const GalleryPage = () => {
  const [searchId, setSearchId] = useState(0);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchRandomPhoto(""));
  }, []);

  const { randomPhoto, isRandomLoading } = useAppSelector(
    (state) => state.randomPhotoSlice
  );
  const { gallery, isLoading } = useAppSelector((state) => state.gallerySlice);

  return (
    <div>
      <div className="gallery-search">
        <Input.Search
          placeholder="Please enter the id of collection"
          onChange={(e) => {
            setSearchId(parseInt(e.target.value));
          }}
          onSearch={() => {
            dispatch(fetchGallery(searchId));
          }}
          enterButton={<Button>Search Collection</Button>}
        />
      </div>
      {gallery.length === 0 ? (
        <RandomPhotoCard
          isRandomLoading={isRandomLoading}
          randomPhoto={randomPhoto}
        />
      ) : (
        <Gallery />
      )}
    </div>
  );
};

export default GalleryPage;
