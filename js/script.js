// il nome all'utente
const nome = prompt("Qual è il tuo nome?");

// il cognome all'utente
const cognome = prompt("Qual è il tuo cognome?");

// il colore preferito all'utente
const colorePreferito = prompt("Qual è il tuo colore preferito?");

// creazione string risultato
let risultato = nome + cognome + colorePreferito + '130';
let risultato2 = cognome + nome + colorePreferito + '130';
let risultato3 = nome + colorePreferito + cognome + '130';
let risultato4 = nome + cognome + '130' + colorePreferito;

// Mostra il risultato nella pagina
document.getElementById("risultato").textContent = risultato;
document.getElementById("risultato2").textContent = risultato2;
document.getElementById("risultato3").textContent = risultato3;
document.getElementById("risultato4").textContent = risultato4;

function copyToClipboard(elementId) {
    const text = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert("S.C.L.");
    })
}