export interface IWeather {
    dt: number,
    id: number,
    main: IWeatherMain,
    name: string,
    sys: IWeatherSys,
    weather: IWeatherWeather[],
    wind: IWeatherWind,
}
export interface IWeatherMain {
    temp:number,
    temp_max: number,
    temp_min:number,
    pressure: number,
    humidity:number,
    feels_like: number,

}
export interface IWeatherSys{
    country: string,
    id: number,
    sunrise: number,
    sunset: number,
}
export interface IWeatherWeather {
    id: number,
    description: string,
    main: string,
    icon: string,
}
export interface IWeatherWind {
    speed: number,
    deg: number,
    gust: number,
}