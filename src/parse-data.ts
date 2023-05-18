import fs from 'fs';
import { parse } from 'csv-parse';
import path from 'path';
import { fileURLToPath } from 'url';

import {isHabitable, includedInInterval} from './filters.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function getPlanets(property, bottomLimit, topLimit) {
    const planets = [];
    await fs.createReadStream(path.join(__dirname, '..', 'data', 'kepler_data.csv'))
        .pipe(parse({
            comment: '#',
            columns: true,
        }))
        .on('data', (data)=>{
            if(property == 'Habitability') {
                if(isHabitable(data)) planets.push(data);
            }
            else {
                if(includedInInterval(property, data, topLimit, bottomLimit)) planets.push(data);
            }
        })
        .on('error', (err)=>{
            console.log(err)
        })
        .on('end', ()=>{
            return planets.map((planet)=>{
                return planet['kepler_name'];
            })
        })
        return planets;
}

export { getPlanets };