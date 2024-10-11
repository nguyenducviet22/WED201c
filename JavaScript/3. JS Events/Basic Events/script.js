function message(msg){
  document.getElementById('event').innerHTML = msg + " event";
}

function register(){
  document.getElementById('register').innerHTML = "Registered";
}

function registerDBI() {
  let dbi = document.getElementById('dbi');
  dbi.innerHTML = "DBI Registered on " + Date();
  dbi.style.color = "green";
}

function cancelDBI() {
  let dbi = document.getElementById('dbi');
  dbi.innerHTML = "DBI Canceled on " + Date();
  dbi.style.color = "red";
}

function registerLAB(el) {
  let lab = document.getElementById('lab');
  lab.innerHTML = "LAB Registered on " + Date();
  el.style.backgroundColor = "green";
}

function cancelLAB(el) {
  let lab = document.getElementById('lab');
  lab.innerHTML = "LAB Canceled on " + Date();
  el.style.backgroundColor = "red";
}

function registerCSD() {
  document.getElementById('csd').innerHTML = "CSD Registered on " + Date();
}

function registerJPD() {
  document.getElementById('jpd').innerHTML = "JPD Registered on " + Date();
}
function registerWED() {
  document.getElementById('wed').innerHTML = "WED Registered on " + Date();
}