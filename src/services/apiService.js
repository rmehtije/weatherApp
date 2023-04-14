const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

const apiUrl = 'https://api.openweathermap.org/data/2.5';

export const defaultParams = {
    lat: 59.437,
    lon: 24.7536,
    mode: "json",
    units: "standard"
};

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
