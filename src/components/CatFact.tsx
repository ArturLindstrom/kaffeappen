import { useEffect, useState } from 'react';

const CatFactLoading = () => {
    const [catFact, setCatFact] = useState<any>();
    const [isLoading, setIsLoading] = useState(false);
    const fetchCatFact = async () => {
        setIsLoading(true);
        const catFact = await fetch("https://catfact.ninja/fact").then(res => res.json());
        setIsLoading(false);
        setCatFact(catFact);
    }
    useEffect(() => {
        fetchCatFact();
    }, [])
    return <>
        <button onClick={() => fetchCatFact()}>Ladda om!</button>
        {isLoading ? <p>Laddar...</p> : <p>{catFact && catFact.fact}</p>}
    </>
}

export default CatFactLoading;
