import React from 'react';
import { Grid } from '@mui/material';
import WeatherItem from './WeatherItem';
import { CityWeather } from '../interface/City';

interface Props {
    currentCityWeather: CityWeather[];
}
const WeatherCard = ({ currentCityWeather }: Props): JSX.Element => {
    const getNextDay = (day: number) => {
        const nextDay = new Date(
            new Date().setDate(new Date().getDate() + day)
        );
        return nextDay;
    };
    return (
        <Grid container className="cardBox">
            {currentCityWeather.map((w, i) =>
                i === 0 ? (
                    <Grid
                        item
                        xs={12}
                        key={i.toString()}
                        className="cardItemToday"
                    >
                        <WeatherItem weatherDetails={w} day={getNextDay(i)} />
                    </Grid>
                ) : (
                    <Grid item xs={12} sm={6} md={3} key={i.toString()}>
                        <WeatherItem weatherDetails={w} day={getNextDay(i)} />
                    </Grid>
                )
            )}
        </Grid>
    );
};

export default WeatherCard;
