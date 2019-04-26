const places = require('./api/places'),
weather = require('./api/weather'),
argv = require('yargs').options({
    address: {
        alias: 'a',
        desc: 'Dirección del lugar o la ciudad para obtener el clima',
        demand: true
    }
}).argv

let getTemp = async address => {
    try {
        let coords = await places.getPlace(address),
        temp = await weather.getWeather(coords.lat, coords.lng)
        return `El clima en ${coords.address} es de ${temp}°C`
    } catch (e) {
        return `No se pudo determinar el clima en ${address}`
    }
}

getTemp(argv.address)
  .then(message => console.log(message))
  .catch(err => console.log(err))