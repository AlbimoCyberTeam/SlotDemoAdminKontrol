function login(){

    const role =
        document.getElementById("role").value;

    const username =
        document.getElementById("username").value;

    const password =
        document.getElementById("password").value;

    /* LOGIN ADMIN */

    if(
        role === "admin" &&
        username === "admin" &&
        password === "admin123"
    ){

        localStorage.setItem(
            "loginRole",
            "admin"
        );

        window.location.href =
            "admin.html";

        return;
    }

    /* LOGIN USER */

    if(
        role === "user" &&
        username.length >= 3 &&
        password.length >= 3
    ){

        localStorage.setItem(
            "loginRole",
            "user"
        );

        localStorage.setItem(
            "username",
            username
        );

        window.location.href =
            "index.html";

        return;
    }

    alert("Login gagal");

}