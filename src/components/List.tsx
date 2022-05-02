const NewList = () => {
    const animals = [
        { type: "tiger", amount: 3, id:1 },
        { type:"lejon", amount: 2, id:2 },
        { type: "hund", amount: 1, id:3 },
        { type: "katt", amount: 0, id:4 },
        { type: "sköldpadda", amount:2, id:5 },
        { type: "fågel", amount: 2, id: 6 },
        { type: "spindel", amount: 1, id:7 },
    ]
    const animalListItem = animals.map(animal => <li key={animal.id} >{animal.type}</li>)
        
    return <ul>{animalListItem}</ul>
    }
    
    export default NewList


