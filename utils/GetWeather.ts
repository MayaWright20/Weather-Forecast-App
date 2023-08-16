import axios from "react-native-axios";
import { WEATHER_API_KEY } from "@env";

export async function getWeather( lat: number, lon: number) {
    try {
        const response = await axios.get(
            `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${lat},${lon}&days=5`
        );


        const weatherData = [];
        for(const[key, value] of Object.entries(response.data)){
            
            const weatherObj = {
                key, value
            }
            weatherData.push(weatherObj)
            
        }
        // console.log("weather",weatherDataArr)
        // setData(weatherDataArr);
    return weatherData
    }catch(error){
        return error
    }
}
