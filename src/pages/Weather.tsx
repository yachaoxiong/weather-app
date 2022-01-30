import React, { useEffect, useState } from 'react';
import getWeather from './../helpers/APICalls/getWeather';
import { Button, Grid, Box } from '@mui/material';
import WeatherCard from './../components/WeatherCard';
import { City, CityWeather } from '../interface/City';

const Weather = (): JSX.Element => {
    const [currentCity, setCurrentCity] = useState<City>({
        name: 'TORONTO',
        lat: 43.7001,
        lon: -79.4163,
    });
    const [currentCityWeather, setCurrentCityWeather] =
        useState<CityWeather[]>();

    useEffect(() => {
        const loadData = setInterval(() => getCurrentWeatherData(), 60000 * 10); // update weather every 10 mins

        const getCurrentWeatherData = () => {
            getWeather(currentCity).then((data) => {
                console.log(data);
                const cityTempArray: CityWeather[] = [];
                for (let i = 0; i < 5; i++) {
                    cityTempArray.push({
                        temp: data.daily[i].temp.day,
                        weather: data.daily[i].weather[0].main,
                    });
                }

                setCurrentCityWeather(cityTempArray);
            });
        };
        getCurrentWeatherData();

        return () => clearInterval(loadData);
    }, [currentCity]);

    const handleCityChange = (city: City) => {
        setCurrentCity(city);
    };
    return (
        <Box>
            <Grid container spacing={2} className="citiesRow">
                <Grid item xs={12} md={4}>
                    <Button
                        onClick={() =>
                            handleCityChange({
                                name: 'NEW YORK',
                                lat: 40.73061,
                                lon: -73.935242,
                            })
                        }
                        variant="text"
                        className={
                            currentCity.name === 'NEW YORK'
                                ? 'itemActive'
                                : 'tabItem'
                        }
                    >
                        NEW YORK
                    </Button>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Button
                        variant="text"
                        onClick={() =>
                            handleCityChange({
                                name: 'TORONTO',
                                lat: 43.7001,
                                lon: -79.4163,
                            })
                        }
                        className={
                            currentCity.name === 'TORONTO'
                                ? ' itemActive'
                                : 'tabItem'
                        }
                    >
                        TORONTO
                    </Button>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Button
                        variant="text"
                        onClick={() =>
                            handleCityChange({
                                name: 'VANCOUVER',
                                lat: 49.246292,
                                lon: -123.116226,
                            })
                        }
                        className={
                            currentCity.name === 'VANCOUVER'
                                ? 'itemActive'
                                : 'tabItem'
                        }
                    >
                        VANCOUVER
                    </Button>
                </Grid>
            </Grid>
            <Grid container className="cityContentRow">
                {currentCityWeather && (
                    <WeatherCard currentCityWeather={currentCityWeather} />
                )}
            </Grid>
        </Box>
    );
};

export default Weather;
