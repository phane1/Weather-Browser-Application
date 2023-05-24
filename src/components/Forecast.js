import React from "react";
import { iconUrl } from "../services/weatherService";
import "./Forecast.css";

function Forecast({title, items}) {
    return (
        <div>
            <div className="Forecast">
                <p className="Header">
                    {title}
                </p>
            </div>
            <hr className="Line" />

            <div className="weatherItems">
                {items.map((item) => (
                    <div className="weatherColumn">
                        <p className="time">
                            {item.title}
                        </p>
                        <img src={iconUrl(item.icon)}
                            alt=""
                            className="Show"
                        />
                        <p className="Degrees">{`${item.temp.toFixed()}°F`}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Forecast;