# APIs

googlesheetsapi
mapbox

## Notes

### Application Information

The following is a store locator application. Store information (e.g. latitude, longitude, store name, store hours, etc.) are stored in a google spreadsheet.

This application access the google spreadsheet via the googlesheet api, formats the returned store location data from the google spreadsheet into JSON, and passes that data to a server so that it can be accessed by the front end.

The server will serve up the store location data as well as the front end which is comprised of an html and css file. Additionally the front end includes a front end javascript file that 1) accesses the server to get the store location data and 2) uses the mapbox api to generate a map that will be populated with the store locations.

### The main.js file is the entry point.

1st) The main.js file accesses the google spreadsheet api and calls the data from the spreadsheet.

2nd) The main.js file sends the spreadsheet data to formatJson to format the data from the googlespreadsheet api into JSON format. The data as returned from the google spreadsheet api is an array which holds each row of the spreadsheet within an array).

3rd) The main.js file starts the server and passes the google spreadsheet data that has been formatted into JSON

### server.js file

The server.js file has routes for the html and api data.

The html route will return the index.html file that will contain the css and script files (public/scripts/script.js).

The api route will return the google spreadsheet data

### scripts.js

The public/scripts/script.js will access the api route via axios in order to get the spreadsheet data and will then use that spreadsheet data to populate the store location information and map.
