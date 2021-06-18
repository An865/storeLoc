const keys = require('./keys.json');

mapboxgl.accessToken = keys.accessToken;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-77.034084, 38.909671],
    zoom: 13,
    scrollZoom: false,
});
