export function saveEating(type,ammount){
    debugger
    fetch('http://localhost:3015/baby', {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            type:'MOTHER_MILK',
            ammount:ammount
        }),
    })
        .then(response => response.json())
        .then(data => {
            if (data)
                alert('save eating');
        });
}