import { useEffect, useState } from "react";

// 4 - CUSTOM HOOK
export const useFetch = (url) => {
    const [data, setData] = useState(null);

    // 5 - REFATORANDO POST
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);
    const [config, setConfig] = useState(null);

    // 6 - LOADING
    const [loading, setLoading] = useState(false);

    const httpConfig = (newData, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(newData)
            });
        };
        setMethod(method);
    };

    useEffect(() => {
        const fetchData = async () => {
            // 6 - LOADING
            setLoading(true);

            const res = await fetch(url);

            const json = await res.json();

            setData(json);

            setLoading(false);
        }
        fetchData();
    }, [url, callFetch]);

    // 5 - REFATORANDO POST
    useEffect(() => {
        const httpRequest = async () => {
            if (method === "POST") {
                const fetchOptions = [url, config]

                const res = await fetch(...fetchOptions);

                const json = res.json();

                setCallFetch(json);
            }
        };
        httpRequest();
    }, [method, url, config, setCallFetch]);

    return { data, httpConfig, loading }

}