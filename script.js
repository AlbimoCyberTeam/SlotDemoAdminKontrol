const symbols = ["🐉","💎","🀄","🔥","👑","💰"];

let saldo = localStorage.getItem("saldo")
  ? parseInt(localStorage.getItem("saldo"))
  : 100000;

let auto = false;

function updateSaldo(){
  document.getElementById("saldo").innerText =
    saldo.toLocaleString();

  localStorage.setItem("saldo", saldo);
}

function rand(){
  return symbols[Math.floor(Math.random()*symbols.length)];
}

function spin(){

  let bet = parseInt(
updateSaldo();