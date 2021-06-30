axios.get('http://localhost:8080/api/stores').then((res) => {
    formatgeoJson(res.data);
});

function formatgeoJson(data) {
    let stores = {
        type: 'FeatureCollection',
        features: [],
    };

    data.forEach((store) => {
        let featureProps = {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [store.lat, store.lng],
            },
            properties: {
                address: store.name,
            },
        };
        stores.features.push(featureProps);
    });
    //stores has all of the store data in geojson format
    console.log(stores);
}

mapboxgl.accessToken =
    'pk.eyJ1IjoiYXNwaXJlOCIsImEiOiJja291Y3Q1eTkwaDJ0MnBrN3h3a2l0MGxrIn0.zQrd_Tphf5M3Juy_LWlHkQ';

let options = {
    enableHighAccuracy: true,
    timeout: 5000,
};

function success(position) {
    setupMap();
    setupMap([position.coords.longitude, position.coords.latitude]);
}

function error(err) {
    window.alert(`ERROR(${err.code}): ${err.message}`);
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map', //container ID
        style: 'mapbox://styles/mapbox/streets-v11', //style URL
        center: center, //starting position
        zoom: 14, //starting zoom
    });

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
    });

    //add controls
    map.addControl(directions, 'top-left');
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);
}
navigator.geolocation.getCurrentPosition(success, error, options);
