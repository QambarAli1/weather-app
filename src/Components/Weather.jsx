import React, { useRef, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCloud, faSmog, faMoon, faSun, } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";


const openWeather_key = '973497d219f1c7351022d3f0bbbb2724'

function Weather() {
    const [cityName , setcityName] = useState('Karachi')
    const inputRef = useRef(null);
    function handleClick() {
        setcityName(inputRef.current.value)
        console.log(cityName);
    }

    const [weatherDesp, setWeatherDesp] = useState(null)
    const [temp, setTemp] = useState(null)
    const [iconWeather, setIconWeather] = useState('')

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName} &appid=${openWeather_key} `)
            .then((response) => {
                // console.log(parseInt(response.data.main.temp) - 273);
                setTemp(parseInt(response.data.main.temp) - 273)
                setWeatherDesp(response.data.weather[0].main)
                // console.log('we  desp ' + JSON.stringify(response.data));
                console.log(response.data);
                if (weatherDesp?.toLowerCase().includes('cloud')) {
                    setIconWeather('cloud')
                    console.log('cloud');
                }
                if (weatherDesp?.toLowerCase().includes('sun')) {
                    setIconWeather('sun')
                    console.log('sun');
                }
                if (weatherDesp?.toLowerCase().includes('haze')) {
                    setIconWeather('haze')
                    console.log('haze');
                }
                if (weatherDesp?.toLowerCase().includes('smoke')) {
                    setIconWeather('smoke')
                    console.log('smoke');
                }
                else {
                    setIconWeather('clear')
                    console.log('clear');
                }
            }).catch((error) => {
                console.log(error.message);
            });
    }, [cityName])



    return (
        <div>
            <div className='header-sec'>
                <div className='container'>
                    <div className='header-main'>
                        <div className='header-heading'>
                            <h2>Weather App</h2>
                        </div>
                        <div className='header-searchbox'>
                            <input type='search' ref={inputRef} />
                            <button onClick={handleClick}>
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <section className='weather-desp-sec section'>
                <div className='container'>
                    <div className='weather-desp-box d-flex align-items-center'>
                        <div>
                            <h3 className='city-name'>{cityName}</h3>
                            <h3 className='d-flex align-items-center gap-3'>
                                <span className='weather-icon'>
                                    {
                                        iconWeather == 'cloud' &&
                                        <FontAwesomeIcon icon={faSun} />
                                    }
                                    {
                                        iconWeather == 'cloud' &&
                                        <FontAwesomeIcon icon={faCloud} />
                                    }
                                    {
                                        iconWeather == 'haze' &&
                                        <FontAwesomeIcon icon={faSmog} />
                                    }

                                    {
                                        iconWeather == 'clear' &&
                                        <FontAwesomeIcon icon={faMoon} />
                                    }
                                    {
                                        iconWeather == 'smoke' &&
                                        <FontAwesomeIcon icon={faSmog} />
                                    }
                                </span>
                                <span className='temperature'>{temp} <sup>o</sup> </span>
                            </h3>
                        </div>
                        <div>
                            <h3 className='weather-desp text-center'>{weatherDesp} </h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Weather
