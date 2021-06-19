const keys = require('./keys.json');

module.exports = mapJs = (stores) => {
    //  mapboxgl.accessToken = keys.accessToken;
    mapboxgl.accessToken =
        pk.eyJ1IjoiYXNwaXJlOCIsImEiOiJja291Y3Q1eTkwaDJ0MnBrN3h3a2l0MGxrIn0.zQrd_Tphf5M3Juy_LWlHkQ;

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v10',
        center: [-77.034084, 38.909671],
        zoom: 13,
        scrollZoom: false,
    });

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
};
