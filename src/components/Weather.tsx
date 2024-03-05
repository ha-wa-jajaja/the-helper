import { useEffect } from "react";
import type { WeatherData } from "../types/weatherResponse";

const Weather = () => {
    async function getWeather() {
        const response = await fetch(
            "        https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-063?Authorization=CWB-0DFD203F-B72D-407A-A41A-FE8113B978AD"
        );
        const weatherData: WeatherData =
            await response.json();
        console.log(weatherData);
    }
    useEffect(() => {
        getWeather();
    }, []);
    return (
        <section>
            <div></div>
        </section>
    );
};

export default Weather;
