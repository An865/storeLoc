let server = require('./server.js');
let formatJSON = require('./formatJson');
const { google } = require('googleapis');
const keys = require('./keys.json');
let mapJs = require('./map');

/* GET DATA FROM GOOGLE SHEET */
//create JSON web token
const client = new google.auth.JWT(keys.client_email, null, keys.private_key, [
    'https://www.googleapis.com/auth/spreadsheets',
]);

//verify connection
client.authorize(function (err, tokens) {
    if (err) {
        console.log(err);
        return;
    } else {
        gsrun(client);
    }
});

async function gsrun(client) {
    //connection to googlesheets api
    const gsapi = google.sheets({ version: 'v4', auth: client });

    //parameters for information we will request from the api
    const options = {
        spreadsheetId: keys.spreadsheetId,
        range: 'locationData',
    };

    let sheetValues = await gsapi.spreadsheets.values.get(options);
    let storeInformation = sheetValues.data.values;
    getStoreData(storeInformation);
}

function getStoreData(storeInformation) {
    //get store data from formatJson module
    let stores = formatJson(storeInformation);

    // Assign a unique ID to each store
    stores.features.forEach(function (store, i) {
        store.properties.id = i;
    });

    //  mapJs(stores);
    server();
}
