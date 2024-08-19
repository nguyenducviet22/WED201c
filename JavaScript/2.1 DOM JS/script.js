// DOM Traversal
const hds = document.getElementsByClassName('heading');
console.log(hds);
const hd1 = document.getElementById('h1');
console.log(hd1);
const hd2 = document.querySelector('.heading');//for class
console.log(hd2);
const hd3 = document.querySelector('#h3');//for id
console.log(hd3);

// Add and Edit Elements
const body = document.querySelector('body');
body.append('Hello World');
const newDiv = document.createElement('div');
const bold = document.createElement('b');
bold.innerText = 'Hello World';
newDiv.append(bold);
body.append(newDiv);
const heading1 = document.getElementById('h1');
heading1.style.color = 'red';
body.style.backgroundColor = 'gray'

//Delete Elements
const heading2 = document.getElementById('h2');
heading2.remove();