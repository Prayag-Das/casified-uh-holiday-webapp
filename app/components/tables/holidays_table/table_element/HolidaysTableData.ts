import axios, { AxiosResponse } from 'axios';

const BASEURL = 'http://localhost:8081/holidaysapi/api/holidays';

interface Holiday {
  description: string;
  types: any;
  closest: boolean;
  year: number;
  holidayTypes: string[];
  officialYear: string;
  observedDateFull: string;
  officialDateFull: string;
  observedDate: string;
  officialDate: string;
}

export function HolidaysTableData(): Promise<Holiday[]> {
    return axios.get<Holiday[]>(BASEURL)
        .then((response: AxiosResponse<Holiday[]>) => {
            //console.log('data has been fetched');
            return response.data;
        })
        .catch((error) => {
            // Handle error
            console.error('Error fetching holiday data:', error);
            return [];
        });
}