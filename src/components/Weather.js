import React from "react";
import {UilTemperature, UilTear, UilWind, UilSun, UilSunset, UilArrowUp, UilArrowDown} from "@iconscout/react-unicons";
import "./Weather.css";
import {formatToLocalTime, iconUrl} from "../services/weatherService";

function Weather({getWeather: {details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like, timezone},}) {
    return (
        <div>
            <div className="Weather">
                <p>{details}</p>
            </div>

            <div className="Information">
                <img src={iconUrl(icon)} 
                alt=""
                className="Show"
                />
                <p className="Degrees">{`${temp.toFixed()}°F`}</p>
                <div className="Rows">
                    <div className="Type">
                        <UilTemperature size={20} className="Icon" />
                        Feels like: 
                        <span className="boldInfo">{`${feels_like.toFixed()}°F`}</span>
                    </div>
                    <div className="Type">
                        <UilTear size={20} className="Icon" />
                        Humidity: 
                        <span className="boldInfo">{`${humidity.toFixed()}%`}</span>
                    </div>
                    <div className="Type">
                        <UilWind size={20} className="Icon" />
                        Wind: 
                        <span className="boldInfo">{`${speed.toFixed()} MPH`}</span>
                    </div>
                </div>
            </div>
                <div className="infoBar">
                    <UilSun />
                    <p className="infoBegin">
                        Sunrise:
                        <span className="boldInfo">{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
                    </p>
                    <p className="infoBegin">
                        |
                    </p>

                    <UilSunset />
                    <p className="infoBegin">
                        Sunset:
                        <span className="boldInfo">{formatToLocalTime(sunset, timezone, "hh:mm a")}</span>
                    </p>
                    <p className="infoBegin">
                        |
                    </p>

                    <UilArrowUp />
                    <p className="infoBegin">
                        High:
                        <span className="boldInfo">{`${temp_max.toFixed()}°F`}</span>
                    </p>
                    <p className="infoBegin">
                        |
                    </p>

                    <UilArrowDown />
                    <p className="infoBegin">
                        Low:
                        <span className="boldInfo">{`${temp_min.toFixed()}°F`}</span>
                    </p>
                    <p className="infoBegin">
                        |
                    </p>
                </div>
        </div>
    );
}

export default Weather;