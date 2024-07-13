const loginForm = document.getElementById("login-form");
const rightEmail = "kiendao@gmail.com";
const rightPassword = "kiendao";
loginForm.addEventListener("submit", function(event){
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if (email === rightEmail && password === rightEmail) {
        alert("Login success!!!");
    }
    else {
        alert("Login fail!")
    }
    alert("email: " + email + "\npassword: " + password)

}
);

