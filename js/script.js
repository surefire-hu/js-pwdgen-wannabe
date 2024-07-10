// il nome all'utente
let nome = prompt("Qual è il tuo nome?");

// il cognome all'utente
let cognome = prompt("Qual è il tuo cognome?");

// il colore preferito all'utente
let colorePreferito = prompt("Qual è il tuo colore preferito?");

// creazione string risultato
let risultato = nome + cognome + colorePreferito + '130';

// Mostra il risultato nella pagina
document.getElementById("risultato").textContent = risultato;