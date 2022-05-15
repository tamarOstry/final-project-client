export function getIdentities(){
    debugger
  return fetch(`http://localhost:3016/baby`)
        .then(response => {
            if (response.ok && response.status == 200)
                return response.json();
        })
        .then(data => {
            if (data) {
                 console.log(data,"data in api baby");
                //  data.forEach(b => {
                     
                //  });
                 return data;
            }
            else {
                alert("you need to application")
            }
        }).catch((err)=>{
            console.log(err);
        })
};