var numero_immagini = 5; // Numero totale di immagini nel slider
var immagine_attuale = 1; // Indice dell'immagine attualmente visualizzata

var immagine_successiva = document.getElementById('next-img'); // Selettore per il pulsante "Successiva"
var immagine_precedente = document.getElementById('previous-img'); // Selettore per il pulsante "Precedente"

// Funzione per visualizzare l'immagine successiva
function next() {
    immagine_attuale++; // Aumenta l'indice dell'immagine attuale
    if (immagine_attuale > numero_immagini) { // Se l'indice supera il numero totale di immagini
        immagine_attuale = 1; // Torna alla prima immagine
    }
    // Nasconde tutte le immagini
    for (let i = 1; i <= numero_immagini; i++) {
        document.querySelector(".hero img:nth-child(" + i + ")").style.display = "none";
    }
    // Visualizza l'immagine corrispondente all'indice attuale
    document.querySelector(".hero img:nth-child(" + immagine_attuale + ")").style.display = "block";
}

// Funzione per visualizzare l'immagine precedente
function previous() {
    immagine_attuale--; // Decrementa l'indice dell'immagine attuale
    if (immagine_attuale < 1) { // Se l'indice è minore di 1
        immagine_attuale = numero_immagini; // Vai all'ultima immagine
    }
    // Nasconde tutte le immagini
    for (let i = 1; i <= numero_immagini; i++) {
        document.querySelector(".hero img:nth-child(" + i + ")").style.display = "none";
    }
    // Visualizza l'immagine corrispondente all'indice attuale
    document.querySelector(".hero img:nth-child(" + immagine_attuale + ")").style.display = "block";
}

// Aggiunge un listener di eventi per il pulsante "Successiva" che chiama la funzione "next" al clic
immagine_successiva.addEventListener('click', next);
// Aggiunge un listener di eventi per il pulsante "Precedente" che chiama la funzione "previous" al clic
immagine_precedente.addEventListener('click', previous);

// Imposta un intervallo per chiamare la funzione "next" ogni 5 secondi
setInterval(next, 5000); // ogni 5 secondi passa alla immagine successiva


// BURGER MENU

// Seleziona l'elemento con la classe "hamburger" e lo assegna alla variabile hamburger
var hamburger = document.querySelector(".hamburger");

// Seleziona l'elemento con la classe "nav-menu" e lo assegna alla variabile navMenu
var navMenu = document.querySelector(".nav-menu");

// Seleziona tutti gli elementi <a> all'interno dell'elemento con la classe "nav-menu" e li assegna alla variabile menuItems
var menuItems = document.querySelectorAll(".nav-menu a");

// Aggiunge un evento di clic all'elemento hamburger
hamburger.onclick = function() {
    // Alterna la classe "active" sull'elemento navMenu
    // Se navMenu ha già la classe "active", la rimuove; altrimenti, la aggiunge
    navMenu.classList.toggle("active");
};

// Itera attraverso tutti gli elementi in menuItems (tutti i link nel menu di navigazione)
menuItems.forEach(function(item) {
    // Aggiunge un evento di clic a ciascun elemento del menu
    item.onclick = function() {
        // Rimuove la classe "active" dall'elemento navMenu
        navMenu.classList.remove("active");
    };
});
