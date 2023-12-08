import axios from "axios";

const BASE_URL = "http://localhost:8080/tables";
const FILTER_URL = "http://localhost:8080/tables/filter";

const createUrl = ({ title, price, size, color }) => {
    const params = new URLSearchParams();
    if (price !== '') params.append('price', price);
    if (title !== '') params.append('title', title);
    if (size !== '') params.append('size', size);
    if (color !== '') params.append('color', color);

    return params.toString() !== '' ? `?${params.toString()}` : '';
};

export const getAllTables = async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
};

export const getFilteredTables = async ({ size, color, price, title }) => {
    const params = createUrl({size, color, price, title});
    const response = await axios.get(FILTER_URL ,{params} );

    return response.data;
    };


export const getTablesById = async (itemId) =>{
    const response = await axios.get(`BASE_URL/${itemId}`);
    return response.data
}