export function saveEating(type,ammount){
    debugger
    fetch('http://localhost:3015/baby', {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            type:type,
            ammount:ammount
        }),
    })
        .then(response => response.json())
        .then(data => {
            if (data)
                alert('save eating');
        });
}

export function saveDiaper(big,small){

}

export function saveShower(ifShower,dateShower){

}

export function saveFever(fever){

}

export function saveJaundice(jaundice){

}

export function saveLengthWeight(length,weight){

}