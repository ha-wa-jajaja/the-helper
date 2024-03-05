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

    async function getBike() {
        // https://data.taipei/dataset/detail?id=c6bc8aed-557d-41d5-bfb1-8da24f78f2fb
        const response = await fetch(
            "        https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"
        );
        const bikeData = await response.json();
        console.log(bikeData);
    }

    useEffect(() => {
        getBike();
    }, []);
    return (
        <section>
            <div></div>
        </section>
    );
};

export default Weather;
