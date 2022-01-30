import React, { useCallback } from 'react';
import { Box, Typography } from '@mui/material';
import { CityWeather } from '../interface/City';
import {
    FaSnowflake,
    FaCloudShowersHeavy,
    FaCloudRain,
    FaSun,
} from 'react-icons/fa';

import {
    BsFillCloudsFill,
    BsFillCloudLightningRainFill,
    BsFillCloudHaze2Fill,
} from 'react-icons/bs';
import moment from 'moment';
interface Props {
    weatherDetails: CityWeather;
    day: Date;
}
const WeatherItem = ({ weatherDetails, day }: Props): JSX.Element => {
    const getIcon = useCallback((weather) => {
        switch (weather) {
            case 'Snow':
                return <FaSnowflake className="weather-icon" />;
            case 'Clouds':
                return <BsFillCloudsFill className="weather-icon" />;
            case 'Rain':
                return <FaCloudShowersHeavy className="weather-icon" />;
            case 'Drizzle':
                return <FaCloudRain className="weather-icon" />;
            case 'Thunderstorm':
                return (
                    <BsFillCloudLightningRainFill className="weather-icon" />
                );
            case 'Clear':
                return <FaSun className="weather-icon" />;
            case 'Mist':
            case 'Smoke':
            case 'Haze':
            case 'Dust':
            case 'Fog':
            case 'Sand':
            case 'Ash':
            case 'Squall':
            case 'Tornado':
                return <BsFillCloudHaze2Fill className="weather-icon" />;

            default:
                return null;
        }
    }, []);
    const getBigIcon = useCallback((weather: String) => {
        switch (weather) {
            case 'Snow':
                return <FaSnowflake className="weather-icon-lg" />;
            case 'Clouds':
                return <BsFillCloudsFill className="weather-icon-lg" />;
            case 'Rain':
                return <FaCloudShowersHeavy className="weather-icon-lg" />;
            case 'Drizzle':
                return <FaCloudRain className="weather-icon-lg" />;
            case 'Thunderstorm':
                return (
                    <BsFillCloudLightningRainFill className="weather-icon-lg" />
                );
            case 'Clear':
                return <FaSun className="weather-icon-lg" />;
            case 'Mist':
            case 'Smoke':
            case 'Haze':
            case 'Dust':
            case 'Fog':
            case 'Sand':
            case 'Ash':
            case 'Squall':
            case 'Tornado':
                return <BsFillCloudHaze2Fill className="weather-icon-lg" />;
            default:
                return null;
        }
    }, []);
    const renderToday = (): JSX.Element => {
        return (
            <Box className="todayWeatherItem">
                <Typography className="todayHead">Today</Typography>
                <Box className="todayInfo">
                    <Box className="todayWeatherIcon">
                        {getBigIcon(weatherDetails.weather)}
                    </Box>

                    <Box>
                        <Box className="todayTemp">
                            {weatherDetails.temp.toFixed(0)}°
                        </Box>
                        <Box className="currentWeather">
                            {weatherDetails.weather}
                        </Box>
                    </Box>
                </Box>
            </Box>
        );
    };
    const renderAnotherDay = (): JSX.Element => {
        return (
            <Box className="cardItem">
                <Box className="otherHeads">{moment(day).format('ddd')}</Box>
                <Box>{getIcon(weatherDetails.weather)}</Box>
                <Box className="weather-temp">
                    {weatherDetails.temp.toFixed(0)}°
                </Box>
            </Box>
        );
    };
    return moment().isSame(day, 'date') ? renderToday() : renderAnotherDay();
};

export default WeatherItem;
