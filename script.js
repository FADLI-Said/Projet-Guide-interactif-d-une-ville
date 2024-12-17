i = 0;

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.restaurants.forEach((item) => {
      console.log(item);
      document.getElementById("resto").addEventListener("click", function () {
        document.querySelector("#content").innerHTML += `
                <div class="card col-12 col-lg-3 m-3 p-2" data-bs-toggle="modal" data-bs-target="#exampleModal${i}">
                    <img src="${item.image}" class="img-fluid" alt="une image d'une ${item.name}">
                    <div class="card-body">
                        <p class="fs-5 card-title">${item.name}</p>
                    </div>
                </div>

                <div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">${item.name}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <img src="${item.image}" class="img-fluid" alt="une image d'une ${item.name}">
        <p class="card-text text-center">${item.description}</p>
        <p class="card-text text-center">${item.adresse}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
            `;
        i++
      });
    });
  })
  .catch((error) => console.error(error));

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.adresses.forEach((item) => {
      console.log(item);
      document
        .getElementById("adresses")
        .addEventListener("click", function () {
          document.querySelector("#content").innerHTML += `
                <div class="card col-12 col-lg-3 m-3 p-2" data-bs-toggle="modal" data-bs-target="#exampleModal${i}">
                    <img src="${item.image}" class="img-fluid" alt="une image de ${item.name}">
                    <div class="card-body">
                        <p class="fs-5 card-title">${item.name}</p>
                    </div>
                </div>

                <div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">${item.name}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <img src="${item.image}" class="img-fluid" alt="une image d'une ${item.name}">
        <p class="card-text text-center">${item.description}</p>
        <p class="card-text text-center">${item.adresse}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
            `;
          i++
        });
    });
  })
  .catch((error) => console.error(error));

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.culture.forEach((item) => {
      console.log(item);
      document
        .getElementById("culturel")
        .addEventListener("click", function () {
          document.querySelector("#content").innerHTML += `
                <div class="card col-12 col-lg-3 m-3 p-2" data-bs-toggle="modal" data-bs-target="#exampleModal${i}">
                    <img src="${item.image}" class="img-fluid" alt="une image de ${item.name}">
                    <div class="card-body">
                        <p class="fs-5 card-title">${item.name}</p>
                    </div>
                </div>

                <div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">${item.name}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <img src="${item.image}" class="img-fluid" alt="une image d'une ${item.name}">
        <p class="card-text text-center">${item.description}</p>
        <p class="card-text text-center">${item.adresse}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
            `;
          i++
        });
    });
  })
  .catch((error) => console.error(error));


document.getElementById("resto").addEventListener("click", function () {
  document.querySelector("#content").innerHTML = "";
  document.getElementById("minTitle").innerText = "Restaurants"
});

document.getElementById("culturel").addEventListener("click", function () {
  document.querySelector("#content").innerHTML = "";
  document.getElementById("minTitle").innerText = "Sortie Culturel"
});

document.getElementById("adresses").addEventListener("click", function () {
  document.querySelector("#content").innerHTML = "";
  document.getElementById("minTitle").innerText = "Bonnes adresses"
});





fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.restaurants.forEach((item) => {
      console.log(item);

        document.querySelector("#content").innerHTML += `
                <div class="card col-12 col-lg-3 m-3 p-2" data-bs-toggle="modal" data-bs-target="#exampleModal${i}">
                    <img src="${item.image}" class="img-fluid" alt="une image d'une ${item.name}">
                    <div class="card-body">
                        <p class="fs-5 card-title">${item.name}</p>
                    </div>
                </div>

                <div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">${item.name}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <img src="${item.image}" class="img-fluid" alt="une image d'une ${item.name}">
                        <p class="card-text text-center">${item.description}</p>
                        <p class="card-text text-center">${item.adresse}</p>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>`;
        i++
      ;
    })
    
    data.culture.forEach((item) => {
      console.log(item);

        document.querySelector("#content").innerHTML += `
                <div class="card col-12 col-lg-3 m-3 p-2" data-bs-toggle="modal" data-bs-target="#exampleModal${i}">
                    <img src="${item.image}" class="img-fluid" alt="une image d'une ${item.name}">
                    <div class="card-body">
                        <p class="fs-5 card-title">${item.name}</p>
                    </div>
                </div>

                <div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">${item.name}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <img src="${item.image}" class="img-fluid" alt="une image d'une ${item.name}">
                        <p class="card-text text-center">${item.description}</p>
                        <p class="card-text text-center">${item.adresse}</p>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>`;
        i++
      ;
    })
    
    data.adresses.forEach((item) => {
      console.log(item);

        document.querySelector("#content").innerHTML += `
                <div class="card col-12 col-lg-3 m-3 p-2" data-bs-toggle="modal" data-bs-target="#exampleModal${i}">
                    <img src="${item.image}" class="img-fluid" alt="une image d'une ${item.name}">
                    <div class="card-body">
                        <p class="fs-5 card-title">${item.name}</p>
                    </div>
                </div>

                <div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">${item.name}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <img src="${item.image}" class="img-fluid" alt="une image d'une ${item.name}">
                        <p class="card-text text-center">${item.description}</p>
                        <p class="card-text text-center">${item.adresse}</p>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>`;
        i++
      ;
    });
  })
  .catch((error) => console.error(error));