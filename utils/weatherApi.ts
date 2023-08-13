import axios from "react-native-axios";
import {OPEN_WEATHER_API_KEY} from "@env";

export async function getWeather(lat: number, lon: number){
    try{
        const { data } = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=c434098cc3a004dade4fca9c8f8cc5c5`);
        return data;
    }catch(error){
        console.log("getWeathr",error)
    }
} 