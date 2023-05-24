import React from "react";
import "./Display.css";
import {UilSearch, UilLocationPoint} from '@iconscout/react-unicons';
import {useState} from "react";

function Display({setQuery}) {
    const [city, setCity] = useState("");

    const handleSearch = () => {
        if (city !== "") {
            setQuery({q: city});
        } 
    }

    const handleLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setQuery({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                });
            });
        }
    }
    return (
        <div className="Display">
            <div className="container">
                <input
                    value = {city}
                    onChange = {(e) => setCity(e.currentTarget.value)}
                    type="text"
                    placeholder="Enter City..."
                    className="search-bar"
                />
                <UilSearch 
                    onClick = {handleSearch}
                    size={20}
                    className="icon"
                />
                <UilLocationPoint 
                    onClick = {handleLocation}
                    size={20}
                    className="icon"
                />
            </div>
        </div>
    );
}

export default Display;