export interface IWeather {
  dt: number;
  id: number;
  main: IWeatherMain;
  name: string;
  sys: IWeatherSys;
  weather: IWeatherWeather[];
  wind: IWeatherWind;
}
export interface IWeatherMain {
  temp: number;
  temp_max: number;
  temp_min: number;
  pressure: number;
  humidity: number;
  feels_like: number;
}
export interface IWeatherSys {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
}
export interface IWeatherWeather {
  id: number;
  description: string;
  main: string;
  icon: string;
}
export interface IWeatherWind {
  speed: number;
  deg: number;
  gust: number;
}
export interface DateType {
  hours: string;
  minutes: string;
  day: string;
  month: string;
  year: number;
  dayNumber: number;
}

export enum Month {
  January = 0,
  February = 1,
  March = 2,
  April = 3,
  May = 4,
  June = 5,
  July = 6,
  August = 7,
  September = 8,
  October = 9,
  November = 10,
  December = 11,
}

export enum Day {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}