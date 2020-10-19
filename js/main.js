// chiedi il cognome
var richiesta = prompt('inserisci il tuo cognome');

//array + aggiunta
var lista = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Giorgini'];
var newlist = lista.push(richiesta);
console.log(lista.sort());
//posizione umana
var indexutente = lista.indexOf(richiesta) + 1;
console.log(indexutente);
