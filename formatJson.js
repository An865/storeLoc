const {google} = require('googleapis');

module.exports = formatJSON = (information) => {


function setJson(lat, lng, address){

   let geojson = {
      "type": "FeatureCollection",
      "features": [
         { 
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates": [
                  lat, lng
               ]
            },
            "properties": {
               "address": address, 
            }
         }
      ]
   }

   console.log(geojson)

} 




   //for each row of the spreadsheet (container or outer array)...
information.forEach(item =>{
   //...go through each column (i) and put that data in json
    for(let i=0; i < information.length; i++){
       let address = item[2]
       let lat = item[18]
       let lng = item[19]

       setJson(lat, lng, address);
      // console.log(`lat: ${lat}, lng: ${lng}`)
    }
 })
}





// let geojson = {
//    "type": "FeatureCollection",
//    "features": [
//       { 
//          "type": "Feature",
//          "geometry": {
//             "type": "Point",
//             "coordinates": [
//                lat, lng
//             ]
//          },
//          "properties": {
//             "address": address, 
//          }
//       }
//    ]
// }