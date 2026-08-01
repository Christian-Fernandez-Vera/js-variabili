// MODULO 1 - CLASSE 13: ESERCIZIO JS VARIABILI

// 1. Dichiarazione e inizializzazione delle variabili di profilo
const nome = "Christian";
const eta = 39;
const lavoro = "sviluppatore"

// 2. CONCATENAZIONE CLASSICA (Operatore +)
// Uniamo catene statiche con i valori delle variabili e gli spazi manuali
const textcontatenato = "Mi chiamo" + " " + nome + ", ho" + " " + eta + " " + "anni e la mia professione è" + " " + lavoro + ".";
console.log("Risultato con Concatenazione");
console.log(textcontatenato);

// 3. TEMPLATE LITERALS (Interpolazione di catene con backticks)
// Struttura più chiara e leggibile utilizzando la sintassi ${variable}
const textTemplateLiteral = `Mi chiamo ${nome}, ho ${eta} anni e la mia professione è ${lavoro}.`;
console.log("Risultato con Template Literal");
console.log(textTemplateLiteral);

// 4. CALCOLI NUMERICI E OPERAZIONI ARITMETICHE
const prezzoProdotto = 49.99;
const quantità = 3;
const subtotale = prezzoProdotto * quantità;
const sconto = 5.50;
const totale = subtotale - sconto;

console.log("--- Operazioni Aritmetiche ---");
console.log(`Subtotale del carrelo: $ ${subtotale}`);
console.log(`Totale con sconto: $ ${totale}`);

// Verifica della coercizione e ispezione dei tipi (Typeof)
console.log("Tipo di dato di 'eta':", typeof eta); //number
console.log("Risultato formattato con .toFixed(2):", totale.toFixed(2)); //string formattato