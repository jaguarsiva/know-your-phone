import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://json-server-online.herokuapp.com",
    withCredentials: true,
    headers: {
        'Accept': "application/json",
        'Content-Type': 'application/json'
    }
});

export default {
    getMobilesbyBrand( brand ) {
        return apiClient.get(
            '/mobiles?_page=1&_limit=4&_sort=approx_price_EUR&_order=desc&approx_price_EUR_ne=NaN&brand=' + brand);
    },
    getAllBrands(){
        return apiClient.get('/mobiles');
    },
    getAllMobilesByBrand(brand,page){
        return apiClient.get(
            `/mobiles?_page=${page}&brand=${brand}&_limit=12`
        );
    }
};