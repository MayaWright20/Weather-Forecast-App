import axios from "react-native-axios";
import { WEATHER_API_KEY } from "@env";

export async function getWeather( api_method:string, query) {
    try {
        const response = await axios.get(
            `https://api.weatherapi.com/v1/${api_method}?key=${WEATHER_API_KEY}&q=${query}&days=5`
        );

        const weatherData = [];
        for(const[key, value] of Object.entries(response.data)){
            
            const weatherObj = {
                key, value
            }
            weatherData.push(weatherObj)
            
        }

    return weatherData
    }catch(error){
        return error
    }
}
