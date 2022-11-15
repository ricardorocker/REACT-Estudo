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

    // 7 - TRATANDO ERROS
    const [error, setError] = useState(null);

    const [id, setId] = useState(null);

    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            });
        } else if (method === "DELETE") {
            setId(data);

            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                }
            })
        }
        setMethod(method);
    };

    useEffect(() => {
        const fetchData = async () => {
            // 6 - LOADING
            setLoading(true);

            try {
                const res = await fetch(url);

                const json = await res.json();

                setData(json);
            } catch (error) {
                setError("Houve algum erro de carregamento de dados!");
            }

            setLoading(false);
        }
        fetchData();
    }, [url, callFetch]);

    // 5 - REFATORANDO POST
    useEffect(() => {
        const httpRequest = async () => {
            setLoading(true);

            let json;

            if (method === "POST") {
                const fetchOptions = [url, config]

                const res = await fetch(...fetchOptions);

                json = res.json();

            } else if (method === "DELETE") {
                const deleteUrl = `${url}/${id}`;

                const res = await fetch(deleteUrl, config);

                json = await res.json();

            }
            setCallFetch(json);
        };
        httpRequest();
    }, [method, url, config, setCallFetch, id]);

    return { data, httpConfig, loading, error }

}