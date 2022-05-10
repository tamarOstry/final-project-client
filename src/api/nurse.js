
export function logIn(userName,password){
    fetch(`http://localhost:3015/nurse/?userName=${userName}&password=${password}`)
        .then(response => {
            if (response.ok && response.status == 200)
                return response.json();
        })
        .then(data => {
            if (data) {
                // alert(`hi ${data.firstName}`);
            }
            else {
                alert("you need to application")
            }
        }).catch((err)=>{
            console.log(err);
        })

};

export function Register(firstName,lastName,userName,password,email,phonNumber) {
    fetch('http://localhost:3015/nurse', {
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


export function update(firstName,lastName,userName,password,email,phonNumber){
    let Userid = JSON.parse(sessionStorage.getItem('user')).id;
    fetch('http://localhost:3015/nurse' + Userid, {
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


