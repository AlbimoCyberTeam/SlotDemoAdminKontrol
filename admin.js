function tambahSaldo(){

  let value = parseInt(
    document.getElementById("saldoInput").value
  );

  let saldo = parseInt(localStorage.getItem("saldo")) || 0;

  saldo += value;

  localStorage.setItem("saldo", saldo);

  document.getElementById("adminResult").innerText =
    "Saldo berhasil ditambah";
}

function resetSaldo(){

  localStorage.setItem("saldo",100000);

  document.getElementById("adminResult").innerText =
    "Saldo direset";
}
function saveMode(){

    let mode =
        document.getElementById("ModePilihan").value;

    localStorage.setItem(
        "ModePilihan",
        mode
    );

    document.getElementById("adminResult")
        .innerText =
        "Mode disimpan : " + mode;

}
