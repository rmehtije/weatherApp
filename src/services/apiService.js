const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

const apiUrl = 'https://api.openweathermap.org/data/2.5';

export const defaultParams = {
    lat: 59.437,
    lon: 24.7536,
    mode: "json",
    units: "standard"
};

export const generateFetchUrl = (params) => {
    const searchParams = new URLSearchParams({
        appid: apiKey,
        ...defaultParams,
        ...params
    });

    return `${apiUrl}/weather?${searchParams}`;
};

export const getCurrentWeather = async (params) => {
    const url = generateFetchUrl(params);

    const response = await fetch(url);

    return await response.json();
};
