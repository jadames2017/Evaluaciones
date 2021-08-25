/* const personajeSerie = 'https://rickandmortyapi.com/api/episode';

async function getCharacters(names = '', month = '') {
    const personajes = [];

    for (let i = 1; i <= limit; i++) {
        const response = await fetch(URL + `?page=${i}`);
        const data = await response.json();

        personajeSerie.push(...data.tv_shows);
    }
    console.log(data);
}
 */

fetch('https://www.el-tiempo.net/api/json/v2/provincias')
    .then((response) => response.json())
    .then((data) => {
        const provinces = data.provincias;
        const provinceNames = provinces.map(
            (province) => province.NOMBRE_PROVINCIA
        );
        console.log(provinceNames);
    })
    .catch((error) => console.error(error));

/**
 * ###################
 * ## Async / await ##
 * ###################
 */

async function getProvinces(URL) {
    try {
        const response = await fetch(URL);
        const data = await response.json();

        const provinces = data.provincias;

        const provinceNames = provinces.map(
            (province) => province.NOMBRE_PROVINCIA
        );

        return provinceNames;
    } catch (error) {
        console.log(error);
    }
}
