import axios from 'axios';
import {useEffect} from "react";
import * as console from "console";

//TODO: Change BASE_URL to include domain from property file

const BASE_URL = "http://localhost:8081/holidaysapi/api/holidays";

const HolidaysTableData = () => {
    const getData = async () => {
        try{
            const res = await axios.get(BASE_URL);
            const data = res.data;
            console.log(data);
            return data;
        } catch (error){
            console.log("Error: could not fetch data");
        }
    };

    return getData();
};

export default HolidaysTableData;
