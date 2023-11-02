const BASE_URL = 'http://localhosy:8080';
const RESOURCE_URL = `${BASE_URL}/table`;

const baseRequest = async ({urlPath = "", method = 'GET', body = null}) => {
    try {
        const reqArg = {
            method,
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        }
        if (body) {
            reqArg.body = JSON.stringify(body);
        }

        const response = await fetch (`${RESOURCE_URL}${urlPath}`, reqArg);

        if (!response.ok) {
            throw new Error(`failed with status: ${response.status}`);
        }

        if (method === "DELETE") {
            console.log("Deleted");
            return;
        }
        return await response.json();
    } catch (error) {
        alert("Error: " + error);
        throw error;
    }
}

export const postTable = async ({
    name = "Desktop",
    weight = 0,
    price = 0
}) => {
    const body1 = {
        name,
        weight,
        price
    }

    return baseRequest({method: "POST", body: body1});
}

export const getAllTables = async () => {
    return baseRequest({method: "GET"});
}

export const getTableById = async (id = -1) => {
    return baseRequest({urlPath: `/${id}`, method: "GET"})
}

export const putTableById = async (id, {
        name = "Desktop",
        weight = 0,
        price = 0
    }) => {
    const body1 ={
        name,
        weight, 
        price
    }
    return baseRequest({urlPath: `/${id}`, method: "PUT", body: body1})
}

export const deleteTableById = async (id) => {
    return baseRequest(
        {urlPath: `/${id}`, method: "DELETE", body: null})
}