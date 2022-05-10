// array numeri random
const numList = [];

// generatore di 20 numeri random
for (let i = 1; i <= 20; i++) {
    numList.push(Math.floor(Math.random() * 1000)) + 1;
}

// array numeri pari
const pari = [];
// array numeri dispari
const dispari = [];

// ciclo per decidere quali numeri sono pari e quali dispari
for (let i = 0; i < numList.length; i++) {
    // se pari aggiungerli all'array dei pari
    if (numList[i] % 2 === 0) {
        pari.push(numList[i]);
    // se dispari aggiungerli all'array dei dispari
    } else {
        dispari.push(numList[i]);
    }

}

// selezione div dei pari
const sezPari = document.getElementById('green-pari');
// selezione div dei dispari
const sezDispari = document.getElementById('red-dispari');


// creazione lista pari
const listaPari = document.createElement('ul');
// creazione lista dispari
const listaDispari = document.createElement('ul');

// aggiunta elementi ad ogni lista con la sua classe
for (let i = 0; i < pari.length; i++) {
    const listItemPari = document.createElement('li');
    listItemPari.append(pari[i]);
    listaPari.append(listItemPari);
    sezPari.append(listaPari);
    sezPari.classList.add("green");
}

for (let i = 0; i < dispari.length; i++) {
    const listItemDispari = document.createElement('li');
    listItemDispari.append(dispari[i]);
    listaDispari.append(listItemDispari);
    sezDispari.append(listaDispari);
    sezDispari.classList.add("red");
}


