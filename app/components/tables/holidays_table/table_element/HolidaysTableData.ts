import axios from 'axios';
import * as console from "console";
import json5 from "json5";

//TODO: Change BASE_URL to include domain from property file

/*

const BASE_URL = "http://localhost:8081/holidaysapi/api/holidays";

const HolidaysTableData = () => {
    const getData = async () => {
        try{
            const res = await axios.get(BASE_URL);
            const data = res.data;
            console.log(data);
            return json5.stringify(data);
        } catch (error){
            console.log("Error: could not fetch data");
        }
    };
    return getData();
};

export default HolidaysTableData;
*/
const HolidaysTableData = async () => {
    const result = await axios(
        'http://localhost:8081/holidaysapi/api/holidays',
    );
    // return the result
    return result;
};

export default HolidaysTableData;
