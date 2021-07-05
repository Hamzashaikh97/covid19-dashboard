import React, { useEffect, useState } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

// const initialState = {
//     stores: [
//     { lat: 47.49855629475769,lng: -122.14184416996333 },
//     { latitude: 47.359423, longitude: -122.021071 },
//     { latitude: 47.2052192687988, longitude: -121.988426208496 },
//     { latitude: 47.6307081, longitude: -122.1434325 },
//     { latitude: 47.3084488, longitude: -122.2140121 },
//     { latitude: 47.5524695, longitude: -122.0425407 }
// ]
// }

const mapStyles = {
    width: '100%',
    height: '100%',
};


function MyMap(props) {

    let [globalData, setglobalData] = useState([])

    useEffect(() => {
        async function callApi() {
            let response = await fetch('https://corona.lmao.ninja/v2/countries?yesterday&sort')
            let data = await response.json();
            console.log(data[0])
            setglobalData(data);
        }
        callApi();
    }, [])

    function displayMarkers() {
        return globalData.map((store, index) => {
            return <Marker key={index} id={index} position={{
                lat: store.lat,
                long: store.long
            }}
                onClick={() => console.log("You clicked me!")} />
        })
    }

    return (
        <div>
            <Map
                google={props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176 }}
            >

            </Map>
            {displayMarkers()}
        </div>

    )
}
export default GoogleApiWrapper({
    apiKey: ('AIzaSyDzTXN4rsytSi3TRuWNqmAAkDdAI61jrHo')
})(MyMap)