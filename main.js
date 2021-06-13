let server = require('./server.js')
const {google} = require('googleapis');
const keys = require('./keys.json');




/* GET DATA FROM GOOGLE SHEET */
//create JSON web token
const client = new google.auth.JWT(
   keys.client_email,
   null,
   keys.private_key,
   ['https://www.googleapis.com/auth/spreadsheets']
);

//verify connection
client.authorize(function(err, tokens){
   if (err){
      console.log(err);
      return;
   } else {
      console.log('connected')
      gsrun(client)
   }
});


async function gsrun(client){

   //connection to googlesheets api
   const gsapi = google.sheets({version: 'v4', auth: client});

   //parameters for information we will request from the api
   const options = {
      spreadsheetId: keys.spreadsheetId,
      range: 'locationData!A1:W137'
   }

   let data = await gsapi.spreadsheets.values.get(options)
   let information = data.data.values;
   //server(information);
  console.log(information);
}