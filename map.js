import axios from 'axios';
import { accessToken } from './keys.json';

//  mapboxgl.accessToken = keys.accessToken;
mapboxgl.accessToken = accessToken;

//note center is in longitude (range -180 to 180), latitude (range -90 to 90)
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-111.8438395, 33.741123],
    zoom: 13,
    scrollZoom: false,
});
//

axios.get('http://localhost:8080').then((response) => {
    console.log(response.data);
    let stores = response.data;
    map.on('load', function (e) {
        /* Add the data to your map as a layer */
        map.addLayer({
            id: 'locations',
            type: 'circle',
            /* Add a GeoJSON source containing place coordinates and information. */
            source: {
                type: 'geojson',
                data: stores,
            },
        });
    });
});
