// Add your code here
// const userData = {
//     name: "Fulvio",
//     email: "fsalza96@gmail.com",
// };

// function submitData(userData) = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify(userData),
// }

// fetch("http://localhost:3000/users", submitData)
//     .then((response) => response.json())
//     .then((object) => console.log(object))
//     .catch(function (error){
//         alert("ERROR! Go back and fix your code!");
//         console.log(error.message);
//     })

function submitData(name, email) {
    let userData = {
        name: name,
        email: email,
    }

    const objectConfig = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(userData)
    }

    return fetch("http://localhost:3000/users", objectConfig)
        .then((response) => response.json())
        .then(function(object) {
            let h2 = document.createElement('h2');
            h2.innerHTML = object.id;
            document.body.appendChild(h2);
            console.log(object);
        })
        .catch(function(error) {
            let h3 = document.createElement('h3');
            h3.innerHTML = error.message;
            document.body.appendChild(h3);
            console.log(error.message);
        })
}