function isHabitable (planet) {
    if(planet['koi_disposition'] === 'CONFIRMED' && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 && planet['koi_prad'] < 1.6) return true
}

function includedInInterval (property, planet, bottomLimit, topLimit) { 
    switch (property) {
        case 'Temperature':
            if(planet['koi_teq'] >= bottomLimit && planet['koi_teq'] <= topLimit) return true;          
            break;
        case 'Size':
            if(planet['koi_prad'] >= bottomLimit && planet['koi_prad'] <= topLimit) return true;
            break;
        case 'Orbital period':
            if(planet['koi_period'] >= bottomLimit && planet['koi_period'] <= topLimit) return true;
            break;
        default:
            break;
    }
}

export { isHabitable, includedInInterval}