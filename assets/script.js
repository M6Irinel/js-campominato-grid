
// prendiamo gli elementi dal DOM
const DOM_campo = document.querySelector('.campo');
const DOM_button_field_campo = document.querySelector('.but_Play');

// creiamo una variabile con il numero per il campo da creare
const fieldSize = 10;

// SE premiamo il pulsante chiamiamo la funzione genera campo
DOM_button_field_campo.addEventListener('click', fieldGenerator, {once: true});

// creiamo una funzione per la creazione del campo
function fieldGenerator() {

    // calcolare il numero di elementi per quadrato
    const pezziCampoComplete = fieldSize ** 2;

    // creiamo un for per ogni elemento creato da inserire nel elemento padre del DOM
    for (let i = 0; i < pezziCampoComplete; i++) {
        // salviamo il valore di ritorno della funzione
        const piece_Field = pieceField();
        // inseriamo il numero dentro al elemento creato
        piece_Field.innerHTML = i + 1;
        // appendiamo l'elemento al elemento padre del DOM
        DOM_campo.append(piece_Field);
    }
}

// funzione che crea un elemento per farlo inserire nel elemento padre nel DOM
function pieceField() {
    // creiamo l'elemento
    const piece = document.createElement('div');
    // assegnare una classe di default
    piece.className = 'pezzo_campo';
    // mettiamo una dimensione all'elemento con il css
    piece.style.flexBasis = `calc(100% / ${fieldSize})`;

    // assegniamo un ascoltatore di tipo click
    piece.addEventListener('click', piece_click, {once: true});

    // ritorniamo il valore alla funzione
    return piece;
}

// funzione per l'ascoltatore click
function piece_click(params) {
    // aggiungere una nuova classe all'elemento creato
    this.classList.add('active');
    // stampiamo nella console il contenuto dell'elemento creato
    console.log(this.innerHTML);
}