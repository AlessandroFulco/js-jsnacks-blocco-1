/* 1. crea un array che parte vuoto ma viene riempito automaticamente  di 10 numeri casuali 
da 1 a 1000 generati dal pc, possono esserci anche doppioni; */


const array = [];
let list = document.querySelector('ul');
for (let i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * 1000)) + 1;
    console.log(array[i]);
    list.innerHTML += `<li>${array[i]}</li>`;
}