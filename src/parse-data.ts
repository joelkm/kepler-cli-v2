import fs from 'fs';
import { parse } from 'csv-parse';
import path from 'path';
import { fileURLToPath } from 'url';

import {isHabitable, includedInInterval} from './filters.js'

// This fixes the "__dirname not defined in ESmodules" error
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function getPlanets(property, bottomLimit, topLimit) {
    let planets = [];
    await new Promise<void>((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '..', 'data', 'kepler_data.csv'))
        .pipe(parse({
            comment: '#',
            columns: true,
        }))
        .on('data', (data)=>{
            if(property == 'Habitability') {                
                if(isHabitable(data)) planets.push(data);
            }
            else {
                if(includedInInterval(property, data, bottomLimit, topLimit)) {
                    console.log('loco');
                    
                    planets.push(data);
                }
            }
        })
        .on('error', (err)=>{
            console.log(err);
            reject();
        })
        .on('end', async ()=>{
            planets = planets.map((planet)=>{                
                return planet['kepler_name'];
            })
            resolve();
        })
    })
    return planets;
}

export { getPlanets };