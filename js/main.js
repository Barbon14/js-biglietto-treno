// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km(0.21 € al km)
// va applicato uno sconto del 20 % per i minorenni
// va applicato uno sconto del 40 % per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana(con massimo due decimali, per indicare centesimi sul prezzo)

// chiedo all'utente quanti chilometri vuole percorrere
const km = prompt('Quanti chilometri devi percorrere?');
console.log(km);

// chiedo all'utente quanti anni ha
const anni = prompt('Quanti anni hai?');
console.log(anni);

// calcolo la tariffa base del biglietto 
const subPrezzo = km * 0.21;
console.log(subPrezzo);

// controllo se l'utente ha diritto ad uno sconto e nel caso lo applico
let prezzo;
if (anni < 18) {
    prezzo = subPrezzo * 0.8
} else if (anni > 65) {
    prezzo = subPrezzo * 0.6
} else {
    prezzo = subPrezzo
}
console.log(prezzo);

// arrotondo il prezzo a 2 decimali
let prezzoArrotondato = Math.round((prezzo + Number.EPSILON) * 100) / 100;
console.log(prezzoArrotondato);

// comunico all'utente il prezzo del suo biglietto 
document.getElementById("prezzo").innerHTML = `Il prezzo del tuo biglietto è ${prezzoArrotondato} &euro;`;