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
                    <img src="${item.image}" class="img-fluid" alt="une image :  ${item.name}">
                    <div class="card-body">
                        <p class="fs-5 card-title text-light text-center text-light">${item.name}</p>
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
        <img src="${item.image}" class="img-fluid" alt="une image :  ${item.name}">
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
                <div class="card col-12 col-lg-3 m-3 p-2 text-center" data-bs-toggle="modal" data-bs-target="#exampleModal${i}">
                    <img src="${item.image}" class="img-fluid" alt="une image de ${item.name}">
                    <div class="card-body">
                        <p class="fs-5 card-title text-light text-light">${item.name}</p>
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
        <img src="${item.image}" class="img-fluid" alt="une image :  ${item.name}">
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
                <div class="card col-12 col-lg-3 m-3 p-2 text-center" data-bs-toggle="modal" data-bs-target="#exampleModal${i}">
                    <img src="${item.image}" class="img-fluid" alt="une image de ${item.name}">
                    <div class="card-body">
                        <p class="fs-5 card-title text-light text-light">${item.name}</p>
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
        <img src="${item.image}" class="img-fluid" alt="une image :  ${item.name}">
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


  document.getElementById("tout").addEventListener("click", function () {
    document.querySelector("#havre").innerText = "Le Havre"
    document.querySelector(".accueil").innerHTML = ""
    document.querySelector(".accueil").innerHTML = `
    <img src="./img/villeduHavre.avif" alt="villeduHavre" width="95%" id="mainImage">
        <p class="text-center fs-6 fst-italic animate-text m-2 text-light border rounded p-2">Le Havre, située en
            Normandie, est une ville
            portuaire
            emblématique de la
            côte
            nord-ouest
            de la France.
            Reconstruite après la Seconde Guerre mondiale par l’architecte Auguste Perret, son centre-ville est classé
            au patrimoine mondial de l’UNESCO pour son architecture en béton novatrice. La ville abrite l'un des plus
            grands ports maritimes d'Europe, favorisant le commerce et les échanges internationaux. Bordée par la
            Manche, elle offre de belles plages et une promenade agréable sur son front de mer.</p>`
    fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.querySelector("#content").innerHTML += `<h2 class="text-light text-center">Restaurants</h2>`
    data.restaurants.forEach((item) => {
      console.log(item);

      document.querySelector("#content").innerHTML += `
                <div class="card col-12 col-lg-3 m-3 p-2 text-center" data-bs-toggle="modal" data-bs-target="#exampleModal${i}">
                    <img src="${item.image}" class="img-fluid" alt="une image :  ${item.name}">
                    <div class="card-body">
                        <p class="fs-5 card-title text-light">${item.name}</p>
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
                        <img src="${item.image}" class="img-fluid" alt="une image :  ${item.name}">
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

    document.querySelector("#content").innerHTML += `<h2 class="text-light text-center">Sortie culturel</h2>`
    data.culture.forEach((item) => {
      console.log(item);

      document.querySelector("#content").innerHTML += `
                <div class="card col-12 col-lg-3 m-3 p-2 text-center" data-bs-toggle="modal" data-bs-target="#exampleModal${i}">
                    <img src="${item.image}" class="img-fluid" alt="une image :  ${item.name}">
                    <div class="card-body">
                        <p class="fs-5 card-title text-light">${item.name}</p>
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
                        <img src="${item.image}" class="img-fluid" alt="une image :  ${item.name}">
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

    document.querySelector("#content").innerHTML += `<h2 class="text-light text-center">Bonne adresses</h2>`
    data.adresses.forEach((item) => {
      console.log(item);

      document.querySelector("#content").innerHTML += `
                <div class="card col-12 col-lg-3 m-3 p-2 text-center" data-bs-toggle="modal" data-bs-target="#exampleModal${i}">
                    <img src="${item.image}" class="img-fluid" alt="une image :  ${item.name}">
                    <div class="card-body">
                        <p class="fs-5 card-title text-light">${item.name}</p>
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
                        <img src="${item.image}" class="img-fluid" alt="une image :  ${item.name}">
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
  })


document.getElementById("resto").addEventListener("click", function () {
  document.querySelector("#content").innerHTML = "";
  document.getElementById("minTitle").innerText = "Restaurants"
});

document.getElementById("culturel").addEventListener("click", function () {
  document.querySelector("#content").innerHTML = "";
  document.getElementById("minTitle").innerText = "Sorties Culturelles"
});

document.getElementById("adresses").addEventListener("click", function () {
  document.querySelector("#content").innerHTML = "";
  document.getElementById("minTitle").innerText = "Bonnes adresses"
});

document.getElementById("tout").addEventListener("click", function () {
  document.querySelector("#content").innerHTML = "";
  document.getElementById("minTitle").innerText = ""
});




fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.querySelector("#content").innerHTML += `<h2 class="text-light text-center">Restaurants</h2>`
    data.restaurants.forEach((item) => {
      console.log(item);

      document.querySelector("#content").innerHTML += `
                <div class="card col-12 col-lg-3 m-3 p-2 text-center" data-bs-toggle="modal" data-bs-target="#exampleModal${i}">
                    <img src="${item.image}" class="img-fluid" alt="une image :  ${item.name}">
                    <div class="card-body">
                        <p class="fs-5 card-title text-light">${item.name}</p>
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
                        <img src="${item.image}" class="img-fluid" alt="une image :  ${item.name}">
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

    document.querySelector("#content").innerHTML += `<h2 class="text-light text-center">Sorties culturelles</h2>`
    data.culture.forEach((item) => {
      console.log(item);

      document.querySelector("#content").innerHTML += `
                <div class="card col-12 col-lg-3 m-3 p-2 text-center" data-bs-toggle="modal" data-bs-target="#exampleModal${i}">
                    <img src="${item.image}" class="img-fluid" alt="une image :  ${item.name}">
                    <div class="card-body">
                        <p class="fs-5 card-title text-light">${item.name}</p>
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
                        <img src="${item.image}" class="img-fluid" alt="une image :  ${item.name}">
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

    document.querySelector("#content").innerHTML += `<h2 class="text-light text-center">Bonnes adresses</h2>`
    data.adresses.forEach((item) => {
      console.log(item);

      document.querySelector("#content").innerHTML += `
                <div class="card col-12 col-lg-3 m-3 p-2 text-center" data-bs-toggle="modal" data-bs-target="#exampleModal${i}">
                    <img src="${item.image}" class="img-fluid" alt="une image :  ${item.name}">
                    <div class="card-body">
                        <p class="fs-5 card-title text-light">${item.name}</p>
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
                        <img src="${item.image}" class="img-fluid" alt="une image :  ${item.name}">
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








window.addEventListener("DOMContentLoaded", () => {
  animate_text(document.querySelector(".animate-text"));
});

function animate_text(elem) {
  if (!elem) return; // Vérifie si l'élément existe
  let delay = 10;
  let contents = elem.textContent.trim(); // 
  elem.textContent = "";

  // Ajout progressif des lettres
  contents.split("").forEach((letter, index) => {
    setTimeout(() => {
      elem.textContent += letter;
    }, delay * index);
  });
}

const nav = document.querySelector(".scrolling");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
})


fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("resto").addEventListener('click', function () {
      document.querySelector(".accueil").innerHTML = ""; // Clear the content
      document.querySelector(".accueil").innerHTML = `
      <div id="restaurant" class="carousel slide px-3" data-bs-ride="carousel">
          <div class="carousel-inner">
              <div class="carousel-item active">
                  <img src="./img/boucheoreille.avif" class="d-block w-100" alt="Image : Bouche a oreille"
                      style="height: auto; object-fit: contain;">
              </div>
              <div class="carousel-item">
                  <img src="./img/grandquai.avif" class="d-block w-100" alt="Image : Grand Quai"
                      style="height: auto; object-fit: contain;">
              </div>
              <div class="carousel-item">
                  <img src="./img/paillette.avif" class="d-block w-100" alt="Image : Taverne la paillette"
                      style="height: auto; object-fit: contain;">
              </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#restaurant" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#restaurant" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
          </button>
      </div>
  `;
  document.getElementById("havre").innerHTML=""
    });


    document.getElementById("culturel").addEventListener('click', function () {
      document.querySelector(".accueil").innerHTML = ""; // Clear the content
      document.querySelector(".accueil").innerHTML = `
      <div id="Sortie-culturel" class="carousel slide px-3" data-bs-ride="carousel">
          <div class="carousel-inner">
              <div class="carousel-item active">
                  <img src="./img/pasino.avif" class="d-block w-100" alt="Image : Pasino"
                      style="height: auto; object-fit: contain;">
              </div>
              <div class="carousel-item">
                  <img src="./img/container.avif" class="d-block w-100" alt="Image : Catène de Containers"
                      style="height: auto; object-fit: contain;">
              </div>
              <div class="carousel-item">
                  <img src="./img/Musée.avif" class="d-block w-100" alt="Image : MuMa Musée d'art moderne André Malraux"
                      style="height: auto; object-fit: contain;">
              </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#Sortie-culturel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#Sortie-culturel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
          </button>
      </div>
  `;
  document.getElementById("havre").innerHTML=""
    });


    document.getElementById("adresses").addEventListener('click', function () {
      document.querySelector(".accueil").innerHTML = ""; // Clear the content
      document.querySelector(".accueil").innerHTML = `
      <div id="bonne-adresse" class="carousel slide px-3" data-bs-ride="carousel">
          <div class="carousel-inner">
              <div class="carousel-item active">
                  <img src="./img/jardin.avif" class="d-block w-100" alt="Image : Les Jardins Suspendus"
                      style="height: auto; object-fit: contain;">
              </div>
              <div class="carousel-item">
                  <img src="./img/Plage.avif" class="d-block w-100" alt="Image : Plage du Havre"
                      style="height: auto; object-fit: contain;">
              </div>
              <div class="carousel-item">
                  <img src="./img/hoteldeville.avif" class="d-block w-100" alt="Image : Place de l'hotel de ville"
                      style="height: auto; object-fit: contain;">
              </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#bonne-adresse" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#bonne-adresse" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
          </button>
      </div>
  `;
  document.getElementById("havre").innerHTML=""
    })
  });


  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

function success(pos) {
    var crd = pos.coords;

    console.log("Votre position actuelle est :");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude : ${crd.longitude}`);
    console.log(`La précision est de ${crd.accuracy} mètres.`);
}

function error(err) {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

document.getElementById("resto").addEventListener("click", function() {
  document.querySelector("#hambur").click()
})

document.getElementById("culturel").addEventListener("click", function() {
  document.querySelector("#hambur").click()
})

document.getElementById("adresses").addEventListener("click", function() {
  document.querySelector("#hambur").click()
})
