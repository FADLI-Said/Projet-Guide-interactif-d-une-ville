fetch('data.json')
    // on a un objet response qui contient les données de la requête
    .then(response => response.json())
    // on a un objet data qui contient les données du fichier data.json
    .then(data => {
        console.log(data) // nous obtenons un objet data qui contient 3 propriétés : restaurants, cultural et addresses.
        for (objProperty in data) { // nous parcourons toutes les propriétés de l'objet à l'aide d'une boucle for...in : objProperty prendra successivement les valeurs restaurants, cultural et addresses.
            console.log(data[objProperty]) // nous affichons ce que contient chaque propriété de l'objet data : un tableau d'objets pour restaurants et cultural, un objet pour addresses.
            for (item of data[objProperty]) { // nous parcourons chaque tableau d'objets pour restaurants et cultural à l'aide d'une boucle for...of : item prendra successivement chaque objet du tableau.
                console.log(item) // nous affichons chaque élément du tableau d'objets pour restaurants et cultural, et chaque propriété de l'objet pour addresses.
                document.querySelector('#content').innerHTML += `
        <div class="card col-3 m-3 p-2">
            <img src="${item.image}" class="img-fluid" alt="une-image">
            <div class="card-body">
                <p class="fs-5 card-title">${item.name}</p>
                <p class="card-text">${item.description}</p>
                <a href="#" class="btn btn-outline-secondary">+ détails</a>
            </div>
        </div>
        `
            }
        }
    })
    .catch(error => console.error(error)); // en cas d'erreur, nous affichons un message d'erreur dans la console.

"use strict";
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