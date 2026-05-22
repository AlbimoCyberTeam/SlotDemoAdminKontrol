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

function logout(){

    localStorage.clear();

    window.location.href =
        "login.html";

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

    let mode =
        localStorage.getItem("demoMode")
        || "normal";

    let multiplier = 1;

    if(mode === "lucky"){

        multiplier = 3;

    }

    if(mode === "hard"){

        multiplier = 0.5;

    }

    let random =
        Math.random();

    /* LUCKY MODE */

    if(
        mode === "lucky" &&
        random < 0.6
    ){

        let hadiah = bet * 15;

        saldo += hadiah;

        result.innerText =
            "🔥 SUPER WIN Rp " +
            hadiah.toLocaleString();

    }

    /* NORMAL */

    else if(a===b && b===c){

        let hadiah =
            bet * 10 * multiplier;

        saldo += hadiah;

        result.innerText =
            "🎉 MEGA WIN Rp " +
            hadiah.toLocaleString();

    }

    else if(
        a===b ||
        b===c ||
        a===c
    ){

        let hadiah =
            bet * 2 * multiplier;

        saldo += hadiah;

        result.innerText =
            "✨ WIN Rp " +
            hadiah.toLocaleString();

    }

    else{

        result.innerText =
            "❌ LOSE";

    }

    updateSaldo();

}
