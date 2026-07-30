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
