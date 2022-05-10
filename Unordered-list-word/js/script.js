/* crea 2 array, di 5 stringhe il primo e di 2 stringhe il secondo
stampa dentro una UL dove ogni LI ha come
contenuto principale in ordine, le parole del primo array e come sotto-contenuto 
annidato le 2 parole del secondo array in una UL annidata */

const arrayOne = ['parola1-1', 'parola2-1', 'parola3-1', 'parola4-1', 'parola5-1'];
const arrayTwo = ['parola1-2', 'parola2-2'];

const container = document.querySelector('div');


let listOne = document.createElement('ul');
let listTwo = document.createElement('ul');
let containerList = document.createElement('div');
container.append(listOne);

for (let i = 0; i < arrayTwo.length; i++) {
    let myLiTwo = document.createElement('li');
    myLiTwo.append(arrayTwo[i]);
    listTwo.append(myLiTwo);
    containerList.append(listTwo);
}

for (let i = 0; i < arrayOne.length; i++) {
    let myLiOne = document.createElement('li');
    myLiOne.innerHTML = arrayOne[i] + containerList.innerHTML;
    listOne.append(myLiOne);
}
