import { City } from '../../interface/City';
const getWeather = (city: City) => {
    return fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.lon}&units=metric&appid=3c074d5b7cb6c3257d75b40ec13b8ed3`
    )
        .then((res) => res.json())
        .catch((err) => console.log(err));
};

export default getWeather;
