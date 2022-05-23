export function getIdentities(){
  return fetch(`http://localhost:3016/baby`)
        .then(response => {
            if (response.ok && response.status == 200)
                return response.json();
        })
        .then(data => {
            if (data) {
                 console.log(data,"data in api baby");
                 return data;
            }
            else {
                alert("there is no babies")
            }
        }).catch((err)=>{
            console.log(err);
        })
};

export function findBaby(choosedBaby){
    return fetch(`http://localhost:3016/baby/${choosedBaby}`)
          .then(response => {
              if (response.ok && response.status == 200)
                  return response.json();
          })
          .then(data => {
              if (data) {
                   console.log(data,"baby choosed");
                   return data;
              }
              else {
                  alert("we dont have this baby")
              }
          }).catch((err)=>{
              console.log(err);
          })
  };