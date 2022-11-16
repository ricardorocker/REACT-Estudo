export const usePost = (url) => {
    
    const postBase = async (newData) => {
        await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newData)
        });

        await fetch(url);

    };

    return { postBase };
}