import { useState, useEffect } from "react";
import axios from "axios";
// import { NYT_API_KEY } from '@env'

const nytApiKey = 'n0gE6mwEP8g2Vzn2NCkGIPlBfGXa1YXQ'
// const nytApiKey = NYT_API_KEY
// console.log("api",nytApiKey)

const useFetch = (endpoint) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: "GET",
        url: `https://api.nytimes.com/svc/topstories/v2/${endpoint}.json`,
        params: {
            "api-key": nytApiKey,
        },
        // params: { ...query },
    };

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options);
            setData(response.data.results);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    };

    return { data, isLoading, error, refetch };
};

export default useFetch;