import React, { FC } from "react";
import { APOD } from "../../types/ApodTypes";
import { DateType } from "../../types/WeatherTypes";
import "./Apod.css";

interface APODProps {
  apod: APOD;
  error: string;
  isLoading: boolean;
  date: DateType;
}

const Apod: FC<APODProps> = ({ apod, error, isLoading, date }) => {
  return (
    <div className="apod-container">
      <img className="apod-background-image" src={apod.hdurl} alt="" />
      <div className="apod-text">
        <div className="apod-date">
          <div className="apod-time">{`${date.hours}:${date.minutes}`}</div>
          <div className="apod-fullldate">{`${date.day}, ${date.dayNumber} ${date.month} ${date.year}`}</div>
        </div>
        <div className="apod-info">
          <div className="apod-title">{apod.title}</div>
          <div className="apod-explanation">{apod.explanation}</div>
          <div className="apod-copyright">{apod.copyright}</div>
        </div>
      </div>
    </div>
  );
};

export default Apod;
