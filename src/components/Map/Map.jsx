import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export const Map = () => {

    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;   

    const mapStyles = {
        height: "50vh",
        width: "100%",
    };

    const defaultCenter = {
        lat: 37.4221,
        lng: -122.0841,
    };

    return (
        <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={15}
                center={defaultCenter}
            >
            </GoogleMap>
        </LoadScript>
    );
};