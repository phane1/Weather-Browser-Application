import React from "react";
import "./Time.css";
import { formatToLocalTime } from "../services/weatherService";

function Time({getWeather: {dt, timezone, name}}) {
    return (
        <div>
            <div className="Time">
                <p className="Date">
                {formatToLocalTime(dt, timezone)}
                </p>
            </div>

            <div className="Location">
                <p className="City">
                    {`${name}`}
                </p>
            </div>
        </div>
    );
}

export default Time;