fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.restaurants.forEach(item => {
            console.log(item);
            document.getElementById("resto").addEventListener("click", function () {
                document.querySelector('#content').innerHTML += `
                <div class="card col-3 m-3 p-2">
                    <img src="${item.image}" class="img-fluid" alt="une-image">
                    <div class="card-body">
                        <p class="fs-5 card-title">${item.name}</p>
                        <p class="card-text">${item.description}</p>
                    </div>
                </div>
            `;
            })

        });
    })
    .catch(error => console.error(error));


fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.adresses.forEach(item => {
            console.log(item);
            document.getElementById("adresses").addEventListener("click", function () {
                document.querySelector('#content').innerHTML += `
                <div class="card col-3 m-3 p-2">
                    <img src="${item.image}" class="img-fluid" alt="une-image">
                    <div class="card-body">
                        <p class="fs-5 card-title">${item.name}</p>
                        <p class="card-text">${item.description}</p>
                    </div>
                </div>
            `;
            })

        });
    })
    .catch(error => console.error(error));


fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.culture.forEach(item => {
            console.log(item);
            document.getElementById("culturel").addEventListener("click", function () {
                document.querySelector('#content').innerHTML += `
                <div class="card col-3 m-3 p-2">
                    <img src="${item.image}" class="img-fluid" alt="une-image">
                    <div class="card-body">
                        <p class="fs-5 card-title">${item.name}</p>
                        <p class="card-text">${item.description}</p>
                    </div>
                </div>
            `;
            })

        });
    })
    .catch(error => console.error(error));


document.getElementById("culturel").addEventListener("click", function () {
    document.querySelector('#content').innerHTML = ""
})

document.getElementById("resto").addEventListener("click", function () {
    document.querySelector('#content').innerHTML = ""
})

document.getElementById("adresses").addEventListener("click", function () {
    document.querySelector('#content').innerHTML = ""
})