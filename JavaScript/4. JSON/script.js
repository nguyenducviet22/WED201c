let key = localStorage.getItem('key1');
console.log(key);
localStorage.setItem('key2', 'value2');

let person = {
    id: 1,
    name: "Viet"
}
let perStr = JSON.stringify(person);
console.log(perStr, typeof perStr);
localStorage.setItem('per', perStr);

let perFromStorage = JSON.parse(localStorage.getItem('per'));
console.log(perFromStorage, typeof perFromStorage);
