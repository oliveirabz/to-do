import axios from "axios";

interface Props {
    latitude: number,
    longitude: number
}

export const GetInfo = async ({ latitude, longitude }: Props) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=f6608a8fbdbc9c94cf4e6cbde65a9301`);

    return response.data;
}