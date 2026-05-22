const symbols = [
    "🐉",
    "💎",
    "🀄",
    "🔥",
    "👑",
    "💰"
];

let saldo = localStorage.getItem("saldo")
    ? parseInt(localStorage.getItem("saldo"))
    : 100000;

let autoSpin = false;

/* UPDATE SALDO */

function updateSaldo(){

    document.getElementById("saldo").innerText =
        saldo.toLocaleString();

    localStorage.setItem("saldo", saldo);

}

/* RANDOM SIMBOL */

function randomSymbol(){

    return symbols[
        Math.floor(Math.random() * symbols.length)
    ];

}

/* SPIN */

function spin(){

    let bet = parseInt(
        document.getElementById("betAmount").value
    );

    if(saldo < bet){

        alert("Saldo tidak cukup");
        return;

    }

    saldo -= bet;

    updateSaldo();

    let reels = [
        document.getElementById("r1"),
        document.getElementById("r2"),
        document.getElementById("r3")
    ];

    /* ANIMASI */

    let animasi = setInterval(()=>{

        reels.forEach(reel=>{

            reel.innerText = randomSymbol();

        });

    },100);

    /* STOP SPIN */

    setTimeout(()=>{

        clearInterval(animasi);

        let s1 = randomSymbol();
        let s2 = randomSymbol();
        let s3 = randomSymbol();

        document.getElementById("r1").innerText = s1;
        document.getElementById("r2").innerText = s2;
        document.getElementById("r3").innerText = s3;

        cekMenang(s1,s2,s3,bet);

    },1500);

}

/* CEK MENANG */

function cekMenang(a,b,c,bet){

    const result =
        document.getElementById("result");

    if(a === b && b === c){

        let hadiah = bet * 10;

        saldo += hadiah;

        result.innerText =
            "🎉 MEGA WIN Rp " +
            hadiah.toLocaleString();

    }
    else if(
        a === b ||
        b === c ||
        a === c
    ){

        let hadiah = bet * 2;

        saldo += hadiah;

        result.innerText =
            "✨ WIN Rp " +
            hadiah.toLocaleString();

    }
    else{

        result.innerText =
            "❌ ZONK";

    }

    updateSaldo();

}

/* AUTO SPIN */

function toggleAuto(){

    autoSpin = !autoSpin;

    const btn =
        document.getElementById("autoBtn");

    if(autoSpin){

        btn.innerText = "STOP AUTO";

        loopAuto();

    }else{

        btn.innerText = "AUTO SPIN";

    }

}

function loopAuto(){

    if(!autoSpin) return;

    spin();

    setTimeout(()=>{

        loopAuto();

    },2500);

}

/* BUY FEATURE */

function buyFeature(){

    const harga = 25000;

    if(saldo < harga){

        alert("Saldo tidak cukup");
        return;

    }

    saldo -= harga;

    let bonus =
        Math.floor(Math.random()*50000)
        + 10000;

    saldo += bonus;

    updateSaldo();

    document.getElementById("result")
        .innerText =
        "🔥 FEATURE WIN Rp " +
        bonus.toLocaleString();

}

/* LOAD */

updateSaldo();
