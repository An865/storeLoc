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
