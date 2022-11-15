import { useEffect, useState } from "react";

// 4 - CUSTOM HOOK
export const useFetchOld = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url);
            
            const json = await res.json();
            
            setData(json);
        }
        fetchData();
    }, [url]);

    return { data }

}