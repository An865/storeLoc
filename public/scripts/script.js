// get call to route for Mapbox accesstoken, store that token in variable
//if outside app makes call then the call should have access token

async function getData() {
    //this is a call to api from local (if statement if local do this - if outside url it must have JWT token)
    const data = await axios
        .get('http://localhost:8080/api/stores')
        .then((response) => response.data);

    return data;
}

mapboxgl.accessToken = config.PROD.ACCESS_TOKEN;

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-111.84414, 33.74143],
    zoom: 4,
    scrollZoom: false,
});
//33.741435934235255, -111.84414824699708

async function formatgeoJson() {
    let data = await getData();

    let stores = {
        type: 'FeatureCollection',
        features: [],
    };

    data.forEach((store) => {
        let featureProps = {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [store.lng, store.lat],
            },
            properties: {
                address: store.name,
            },
        };
        stores.features.push(featureProps);
    });
    //stores has all of the store data in geojson format
    return stores;
}

async function renderStores() {
    let stores = await formatgeoJson();
    // console.log(stores);

    map.on('load', async function (e) {
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
}

renderStores();
