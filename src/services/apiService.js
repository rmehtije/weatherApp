const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

const apiUrl = 'https://api.openweathermap.org/data/2.5';

export const defaultParams = {
    lat: 59.437,
    lon: 24.7536,
    mode: "json",
    units: "metric"
};

// Tut my generirujem iz objekta sozdajom pravel'nyj sinteksis dlja zaprosa.
export const generateFetchUrl = (params, endPoint = 'weather') => {
    const searchParams = new URLSearchParams({
        appid: apiKey,
        ...defaultParams,
        ...params
    });

    return `${apiUrl}/${endPoint}?${searchParams}`;
};

export const getCurrentWeather = async (params) => {
    const url = generateFetchUrl(params);

    // fetch - funkcija js kotoraja delajet zapros na dannyj jemu url. V nashem slu4ii my peredajom fetchu url s kotorogo nuzhno stjanut' dannyje.
    // fetch zahodit na dannyj jemu url i parset vsjo 4to jemu vydadut. V nashem slu4ii jemu peredajut JSON s dannymi o pogode.
    // Fetch sobirajet eto vsjo v response object. 
    // Response object eto tip objekta s uzhe gotovymi metodami dlja obrabotki dannyh.
    // No poskol'ku zapros zanimajet vremeni i obrabotka to fetch obora4ivajet response object v promise objekt.
    
    const response = await fetch(url);

    if (!response.ok) {
        const errorMessage = `Current Weather Error ${response.status}: ${response.statusText}`;
        throw errorMessage;
    }

    return await response.json();
};

export const getForecastWeather = async (params) => {
    const url = generateFetchUrl(params, 'forecast');

    const response = await fetch(url);

    if (!response.ok) {
        const errorMessage = `Forecast Weather Error ${response.status}: ${response.statusText}`;
        throw errorMessage;
    }

    return await response.json();
};
