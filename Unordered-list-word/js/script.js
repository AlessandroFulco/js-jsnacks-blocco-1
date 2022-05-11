/* crea 2 array, di 5 stringhe il primo e di 2 stringhe il secondo
stampa dentro una UL dove ogni LI ha come
contenuto principale in ordine, le parole del primo array e come sotto-contenuto
annidato le 2 parole del secondo array in una UL annidata */

const arrayOne = ['parola1-1', 'parola2-1', 'parola3-1', 'parola4-1', 'parola5-1'];
const arrayTwo = ['parola1-2', 'parola2-2'];

// selezione prima lista ul
const firstLevUl = document.getElementById('level1');

// livello 1
for (let i = 0; i < arrayOne.length; i++) {
    // estrapolo contenut iesimo del primo array
    let firstLevContent = arrayOne[i];
    // creazione li
    let firstLevLi = document.createElement('li');
    // appendiamo il contenuto ad ogni li
    firstLevLi.append(firstLevContent);
    // appendiamo ogni li alla lista di primo livello
    firstLevUl.append(firstLevLi);

    // creazione seconda lista annidata
    let secondLevUl = document.createElement('ul');

    // livello 2
    for (let j = 0; j < arrayTwo.length; j++) {
        // estrapolo contenuto iesimo del secondo array
        let secondLevContent = arrayTwo[j];
        // creazione li
        let secondLevLi = document.createElement('li');
        // appendiamo contenuto secondo array al LI
        secondLevLi.append(secondLevContent);
        // appendiamo li alla lista UL
        secondLevUl.append(secondLevLi);
        // appendiamo la lista annidata ad ogni LI del primo livello
        firstLevLi.append(secondLevUl);
    }



}