let key = localStorage.getItem('key2');
console.log(key);
localStorage.setItem('key2', 'value2');

function add(){
    let input = document.getElementById('input');
    let text = input.value;
    let li = document.createElement('li');
    li.innerHTML = text;
    let list = document.getElementById('content-list');
    list.appendChild(li);
    input.value = "";
}