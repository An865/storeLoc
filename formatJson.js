module.exports = formatJson = (storeInformation) => {
    //stores to be returned and serve as input for mapbox
    let stores = {
        type: 'FeatureCollection',
        features: [],
    };

    //for each row of the spreadsheet (container or outer array)...
    storeInformation.forEach((cell) => {
        //the following functions as the "database model" for the spreadsheet
        let name = cell[0],
            description = cell[1],
            address = cell[2],
            phone = cell[3],
            website = cell[4],
            email = cell[5],
            tags = cell[6],
            monday = cell[7],
            tuesday = cell[8],
            wednesday = cell[9],
            thursday = cell[10],
            friday = cell[11],
            saturday = cell[12],
            sunday = cell[13],
            image_url = cell[14],
            facebook = cell[15],
            instagram = cell[16],
            twitter = cell[17],
            lat = cell[18],
            lng = cell[19];

        let featureProps = {
            name: name,
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [lat, lng],
            },
            properties: {
                name: name,
                description: description,
                address: address,
                phone: phone,
                website: website,
                email: email,
                tags: tags,
                monday: monday,
                tuesday: tuesday,
                wednesday: wednesday,
                thurdsay: thursday,
                friday: friday,
                saturday: saturday,
                sunday: sunday,
                image_url: image_url,
                facebook: facebook,
                instagram: instagram,
                twitter: twitter,
            },
        };
        stores.features.push(featureProps);
    });
    return stores;
};
