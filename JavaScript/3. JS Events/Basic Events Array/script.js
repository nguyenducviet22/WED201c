let fruits = ["Banana", "Apple", "Orange"];

function loadFruits(){
    document.getElementById('fruits').innerHTML = fruits;
}

function addFruits(){
    let fruit = prompt("Enter new fruit");
    fruits[fruits.length] = fruit;
    document.getElementById('fruits').innerHTML = fruits
}