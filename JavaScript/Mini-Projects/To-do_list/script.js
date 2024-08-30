let list = ['DBI', 'CSD'];
let contentList = document.getElementById('content-list');
for (let i = 0; i < list.length; i++){
    let li = document.createElement('li');
    li.innerHTML = list[i];
    contentList.appendChild(li);
}

function add(){
    let input = document.getElementById('input');
    let text = input.value;
    let li = document.createElement('li');
    li.innerHTML = text;
    list.appendChild(li);
    input.value = "";
}