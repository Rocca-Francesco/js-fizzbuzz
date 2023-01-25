// prendo il contenitore dove fare comparire i box
const boxContainerEl = document.getElementById("boxContainer");

// creo un ciclo per creare i miei 100 box
for (let i = 0; i < 100; i++) {
    let boxItem = document.createElement("div");
    // aggiungo la classe box a tutti e assegno il numero
    boxItem.classList.add("box");
    boxItem.innerText = i + 1;
    // creo un ciclo in cui prima cerco i divisori comuni, in modo da escluderli subito
    if ((i + 1) % 3 == 0 && (i + 1) % 5 == 0) {
        boxItem.classList.add("box-fizzbuzz");
        boxItem.innerText = "fizz";
    } else {
        // ora creo un secondo ciclo per verificare i divisori singoli
        if ((i + 1) % 3 == 0) {
            boxItem.classList.add("box-fizz");
            boxItem.innerText = "fizz";
        } else if ((i + 1) % 5 == 0) {
            boxItem.classList.add("box-buzz");
            boxItem.innerText = "buzz";
        }
    }
    // i numeri generici saranno esclusi, quindi inserisco le box complete
    boxContainerEl.append(boxItem);
}
