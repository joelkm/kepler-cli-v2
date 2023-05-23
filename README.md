# Planet Analyzer

I really like astrology, and there is a common interest on building projects using the data from Nasa's Kepler telescope, so I wanted to hop on this kind of ptoject as well. I wanted to do something different, so instead of building some sort of webapp I tried to do something different using the CLI. Here's the result:
![Screenshot from 2023-05-23 18-30-23](https://github.com/joelkm/kepler-cli-v2/assets/109240974/5c29d6d9-b542-45bd-a613-1e4939780940)

To run the app, clone the repo, cd into the directory and run:
```
npm start
```

## The app

It is a CLI application that gets a list of the registered planets by the Kepler telescope and filters it depending on the user requirements.
The data gets parsed as a stream the CSV of the registered planets in [Kepler's website](https://www.nasa.gov/mission_pages/kepler/).
![Screenshot from 2023-05-23 18-29-42](https://github.com/joelkm/kepler-cli-v2/assets/109240974/a6007f72-20cf-44d5-b0e5-4a711b1e3c82)

User requirements can be specified choosing between these options:
- 1: Habitable planets
- 2: Planets inside a certain temperature interval
- 3: Planets inside a certain size interval
- 4: Planets inside a certain orbital period interval

![Screenshot from 2023-05-23 18-29-50](https://github.com/joelkm/kepler-cli-v2/assets/109240974/3d12efc6-1ebd-4690-adec-dff63d2b4960)

The habitability conditions (extracted from Paul Glister's research on planet habitability) used to filter down planets where:
- KOI disposition (A parameter to measure stellar disposition, explained in depth [here](https://exoplanetarchive.ipac.caltech.edu/docs/PurposeOfKOITable.html)
- Light incidence (Between 0.36 and 1.11 asigning the Earth an incidence of 1)
- Planet radius (Inferior than 1.6 times the size of the Earth)

For options 2, 3 and 4, user needs to specify a value interval to filter planets. The units used to filter planets are Kelvin for temperature, size to Earth size ratio for size and days for orbital period.
