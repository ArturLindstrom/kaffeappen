import { useState, useEffect } from "react";

interface CatFactsListInterface {
    catFacts: Object,
    data: Array<{
        fact: string
    }>,
}


const CatFactsList = () => {
    const [catFacts, setCatFacts] = useState<CatFactsListInterface | undefined>();
    useEffect(() => {
        fetch('https://catfact.ninja/facts')
            .then(response => response.json())
            .then(data => setCatFacts(data))
            .catch(error => console.log(error))
    }, [])
    return (<ul>
        {catFacts?.data.map(catFact => <li>{catFact.fact}</li>)}
    </ul>
    )
}

export default CatFactsList