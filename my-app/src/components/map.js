import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
};

function MyMap() {

    console.log("working")
    return (
        <div>
            <Map
             google={this.props.google}

                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176 }}
            />
        </div>

    )
}
export default GoogleApiWrapper({
    apiKey: ('AIzaSyDzTXN4rsytSi3TRuWNqmAAkDdAI61jrHo')
})(MyMap)