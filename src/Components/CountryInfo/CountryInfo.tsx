import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, CircularProgress, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Home/Home.css';

interface CountryNameProps{
    countryName: string;
}

interface CountryInfoInterface {
    flags: {
        svg: string
    },
    capital: string,
    population: number,
    latlng: number[],
}

interface WeatherInfoInterface {
    weather_icons: string,
    temperature: number,
    wind_speed: number,
    precip: number
}

const CountryInfo = () => {
    const {countryName} = useParams<CountryNameProps>();
    const [countryInfo, setCountryInfo] = useState<CountryInfoInterface>();
    const [loading, setLoading] = useState<boolean>(false);
    const [weatherLoading, setWeatherLoading] = useState<boolean>(false);
    const [showWeatherInfo, setShowWeatherInfo] = useState<boolean>(false)

    const [weatherInfo, setWeatherInfo] = useState<WeatherInfoInterface>();

    useEffect(() => {
        getData();
    },[countryName])

    const getData = () => {
        try{
            setLoading(true);

            axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
            .then(response => {
                const data = response.data[0];
                setCountryInfo(data);
            })

            setLoading(false);

        }catch(error){
            setLoading(false);
        }
    }

    const handleCapitalWeather = () => {
        try{
            setWeatherLoading(true);
            setShowWeatherInfo(true);

            axios.get(`http://api.weatherstack.com/current?access_key=e6c02155534d93af34a954cb6c1faccb&query=${countryInfo?.capital}`)
            .then(response => {
                const capitalData = response.data;
                setWeatherInfo(capitalData.current);
            })

            setWeatherLoading(false);

        }catch(error){
            setWeatherLoading(false);
        }
    }

    return (
        <>
            <h1 data-testid="countryInfoTitle" style={{"textAlign": "center"}}>Information of {countryName}</h1>

            {
                loading ? 
                <Box>
                    <CircularProgress size={20} />
                </Box> : 
                <div style={{"marginBottom": "50px", "display": "flex", "flexDirection": "column", "alignItems": "center"}}>

                    {
                        countryInfo ?
                        <Card sx={{ maxWidth: 200 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={countryInfo?.flags.svg}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        <h6 data-testid="capitalName">Capital: {countryInfo?.capital}</h6>
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Population: {countryInfo?.population} <br />
                                        Latitude: {countryInfo?.latlng[0]}<sup>o</sup> <br />
                                        Longitude: {countryInfo?.latlng[1]}<sup>o</sup>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card> : <p data-testid="capitalName">No data Found</p>
                    }

                    {
                        <button data-testid="weatherButton" onClick={handleCapitalWeather} className='weatherButton'>Capital Weather</button>
                    }

                    {
                        weatherLoading ? 
                        <Box>
                            <CircularProgress size={20} />
                        </Box> : 
                        weatherInfo ?
                        <Card sx={{ maxWidth: 200 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    width="100"
                                    height="140"
                                    image={weatherInfo?.weather_icons}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography data-testid="weatherInformationTest" variant="body2" color="text.secondary">
                                        Temperature: {weatherInfo?.temperature}<sup>o</sup> <br />
                                        Wind Speed: {weatherInfo?.wind_speed} <br />
                                        Precip: {weatherInfo?.precip}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card> : <p data-testid="weatherInformationTest"></p>
                    }
                </div>
            }
        </>
    );
};

export default CountryInfo;