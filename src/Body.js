import React, { Component } from "react";
import "./Body.css"; // Import the CSS file

class Body extends Component {
    constructor() {
        super();
        // this.url = "http://api.open-notify.org/iss-now.json";
        this.url = "https://api.wheretheiss.at/v1/satellites/25544";
        this.state = {
            coords: {
                latitude: "",
                longitude: ""
            }
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData = async function () {
        const response = await fetch(this.url);
        const data = await response.json();
        const latitude = data.latitude;
        const longitude = data.longitude;

        this.setState({
            coords: {
                latitude: latitude,
                longitude: longitude
            }
        });
    }

    render() {
        return (
            <div className="space-container">
                <h1 className="title">International Space Station</h1>
                <div className="coordinates">
                    <p>Current Coordinates:</p>
                    <p>Latitude: {this.state.coords.latitude}</p>
                    <p>Longitude: {this.state.coords.longitude}</p>
                </div>
            </div>
        );
    }
}

export default Body;
