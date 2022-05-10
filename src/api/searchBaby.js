export function allBaybies(){
    debugger
    fetch(`http://localhost:3015/baby`)
        .then(response => {
            if (response.ok && response.status == 200)
                return response.json();
        })
        .then(data => {
            if (data) {
                 alert(JSON.parse(data));
                 return JSON.parse(data);
            }
            else {
                alert("you need to application")
            }
        }).catch((err)=>{
            console.log(err);
        })

};