const fs = require('fs')

const deg2rad = (deg) => {
    return deg * (Math.PI / 180)
}
const readFileContent = (fileName) => {
    try {
        return fs.readFileSync(fileName, 'utf-8')
    } catch (error) {
        console.error(error.code)
        return
    }
}
const isWithinDistance = (lat1, lng1, lat2, lng2, distance) => {
    if (!lat1 || !lng1 || !lat2 || !lng2 || !distance) {
        return false
    }

    const R = 6371 // Earth radius in km
    const dLat = deg2rad(lat2 - lat1)
    const dLon = deg2rad(lng2 - lng1)
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

    return R * c <= distance
}

const customers = () => {
    const latOffice = 53.339428
    const lngOffice = -6.257664
    const distanceInKM = 100
    const fileContent = readFileContent('./customers.json')

    let customers = {}
    let userIDs = []

    fileContent && fileContent.split("\n").forEach(function (line) {
        let customer = JSON.parse(line)
        if (isWithinDistance(latOffice, lngOffice, customer.latitude, customer.longitude, distanceInKM)) {
            customers[customer.user_id] = customer.name
            userIDs.push(customer.user_id)
        }
    })

    userIDs.sort((a, b) => { return a - b })

    userIDs.forEach(function (key) {
        console.log(`${key}: ${customers[key]}`)
    });
}

module.exports = {
    customers,
    deg2rad,
    isWithinDistance,
    readFileContent
}