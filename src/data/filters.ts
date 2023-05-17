function isHabitable (planet) {
    return planet['koi_disposition'] === 'CONFIRMED' && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 && planet['koi_prad'] < 1.6
}

function includedInInterval (property, planet, bottomLimit, topLimit) {
    switch (property) {
        case 'temperature':
            return planet['koi_teq'] >= bottomLimit && planet['koi_teq'] <= topLimit
            break;
        case 'size':
            return planet['koi_prad'] >= bottomLimit && planet['koi_prad'] <= topLimit
            break;
        case 'orbitalPeriod':
            return planet['koi_period'] >= bottomLimit && planet['koi_period'] <= topLimit
            break;
        default:
            break;
    }
}

export { isHabitable, includedInInterval}