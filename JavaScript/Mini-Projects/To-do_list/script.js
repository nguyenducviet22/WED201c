function add(){
    let input = document.getElementById('input');
    let text = input.value;
    let li = document.createElement('li');
    li.innerHTML = text;
    let list = document.getElementById('content-list');
    list.appendChild(li);
    input.value = "";
}