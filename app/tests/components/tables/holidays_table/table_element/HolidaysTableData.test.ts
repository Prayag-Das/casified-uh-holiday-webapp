import {HolidaysTableData} from "@/components/tables/holidays_table/table_element/HolidaysTableData";
import axios from "axios";
describe('HolidaysTableData', () => {
    const BASE_URL = "http://localhost:8081/holidaysapi/api/holidays";
    it('should make a get request through the correct url', () => {
        const spy = jest.spyOn(axios, "get");
        HolidaysTableData();
        expect(spy).toHaveBeenCalledWith(BASE_URL);
    });
});
