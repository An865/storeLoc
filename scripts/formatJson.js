module.exports = formatJson = (storeInformation) => {
    //data categories (top most row of google sheet)
    let dataCategories = storeInformation[0];
    let stores = [];

    //for each row in spreadsheet
    storeInformation.forEach((col, index) => {
        //no need to put dataCategories into returned json store data
        if (index != 0) {
            //object to store individual store data
            let indStore = {};
            //for the first (top most) row
            for (let i = 0; i < dataCategories.length; i++) {
                //stores to be returned and serve as input for mapbox

                let jsonKey = dataCategories[i];
                let jsonValue = col[i];

                indStore[jsonKey] = jsonValue;
            }
            stores.push(indStore);
        }
    });
    return stores;
};
