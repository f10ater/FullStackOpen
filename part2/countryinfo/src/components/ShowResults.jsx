import { useState, useEffect } from 'react'
import axios from 'axios'

const ShowResults = ({list, searchString, setSearchString}) => {

    if (!searchString)
        return (<p>Search for a country</p>)

    const validResults = list.filter(country => country.name.common.toLowerCase().includes(searchString.toLowerCase()))

    if (validResults.length > 10)
        return (<p>too many matches, specify another filter</p>)
    else if (validResults.length === 1)
        return displayCountryInfo(validResults[0])
    else

        return (
            <>
              {validResults.map(country => (
                <p key={country.name.common}>
                    {country.name.common}
                    <button onClick={() => {
                        setSearchString(country.name.common)
                    }}>
                        Show
                    </button>
                </p>
              ))}
            </>
          );
}

const displayCountryInfo = country => {

    console.log(country)
    
    const [weatherData, setWeatherData] = useState(null)


    const api_key = import.meta.env.VITE_WEATHER_KEY
    const url = 'https://api.openweathermap.org/data/2.5/weather'


    useEffect(() => {
        const [lat, lng] = country.capitalInfo.latlng
        axios
        .get(`${url}?lat=${lat}&lon=${lng}&units=metric&appid=${api_key}`)
        .then(response => {
            setWeatherData(response.data)
        })
    }, [])

    const flagStyle = {
        height: 400,
        width: 'auto'
    }

    const languages = []
    for (let key in country.languages)
        languages.push(country.languages[key])


    return (
        <>
            <h2>{country.name.common}</h2>
            <p>Capital {country.capital}</p>
            <p>Area {country.area}</p>

            <h4>Languages:</h4>
            <ul>
                {languages.map(lang => <li key={lang}>{lang}</li>)}
            </ul>

            <img src={country.flags.svg} alt={country.flags.alt} style={flagStyle}/>
            <Weather data={weatherData} capital={country.capital[0]}/>
        </>
    )
}

const Weather = ({data, capital}) => {
    if (!data)
        return null

    console.log(data)
    
    return (
        <>
            <h3><strong>Weather in {capital}</strong></h3>
            <p>Temperature {data.main.temp} Celcius</p>
            <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather.main}/>
            <p>Wind Speed {data.wind.speed} m/s</p>
        </>
    )
}

export default ShowResults