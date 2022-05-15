
// export const logIn=async(userName,password)=>{
//     try{
//         debugger
//         const url=`http://localhost:3015/nurse/?userName=${userName}&password=${password}`;
//         const response=await fetch(url);
//         const data=await response.json();
//         console.log(data);
//         return data;
//     }
//     catch(err){
//         throw new Error(err);
//     }
// }

export function logIn(userName, password) {
    return fetch(`http://localhost:3016/nurse/?userName=${userName}&password=${password}`)
        .then(response => {
            if (response.ok && response.status == 200)
                return response.json();
        })
        .then(data => {
            if (data) {
                // console.log(data);
                sessionStorage.setItem('nurse', JSON.stringify(data));
                return data._id;
                // alert(`hi ${data.firstName}`);
            }
        }).catch((err) => {
            console.log(err);
        })
};

export function Register(firstName, lastName, userName, password, email, phonNumber) {
    fetch('http://localhost:3016/nurse', {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            password: password,
            email: email,
            phoneNumber: phonNumber,
        }),
    })
        .then(response => response.json())
        .then(data => {
            if (data)
                alert(data._id);
        });
}


export function update(firstName, lastName, userName, password, email, phonNumber) {
    let Userid = JSON.parse(sessionStorage.getItem('user')).id;
    fetch('http://localhost:3016/nurse' + Userid, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'PUT',
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            password: password,
            email: email,
            phoneNumber: phonNumber,
        }),
    })
        .then(response => response.json())
        .then(data => {
            if (data)
                alert(data._id);
        });
}


