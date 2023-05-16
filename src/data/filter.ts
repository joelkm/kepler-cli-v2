function isHabitable(planet){
    return planet['koi_disposition'] === 'CONFIRMED' && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 && planet['koi_prad'] < 1.6
}

function temperatureInterval(planet, bottomTemp, topTemp){
    return planet['koi_teq'] >= bottomTemp && planet['koi_teq'] <= topTemp
}

function sizeInterval(planet, bottomSize, topSize){
    return planet['koi_prad'] >= bottomSize && planet['koi_prad'] <= topSize
}

function orbitalPeriodInterval(planet, bottomPeriod, topPeriod){
    return planet['koi_period'] >= bottomPeriod && planet['koi_period'] <= topPeriod
}

module.exports = {
    isHabitable: (planet) => {
        return planet['koi_disposition'] === 'CONFIRMED' && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 && planet['koi_prad'] < 1.6
    },
    includedInInterval: (property, planet, bottomLimit, topLimit) => {
        switch (key) {
            case value:
                
                break;
        
            default:
                break;
        }
    },
}