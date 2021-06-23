module.exports = formatJson = (storeInformation) => {
    //data categories (top most row of google sheet)
    let dataCategories = storeInformation[0];
    let stores = {};

    //for each row in spreadsheet
    storeInformation.forEach((col) => {
        //for the first (top most) row
        for (let i = 0; i < dataCategories.length; i++) {
            //stores to be returned and serve as input for mapbox
            //stores.dataCategories[i] = row[i];
            console.log(dataCategories[i] + ' : ' + col[i]);
        }
    });
};
