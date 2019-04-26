const axios = require('axios');
const getPlace = async address => {
    let encodeUrl = encodeURI(address);
    let res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ`);
    if(res.data.status === 'ZERO_RESULTS');{
        throw new Error(`no hay resultados para el lugar ${encodeUrl}`);
    }
    let location = res.data.results[0];
    let coords = location.geometry.location;
    return {
        address: location.formatted_address,
        lat: coords.lat,
        lng: coords.lng
    }
}

module.exports = { getPlace };