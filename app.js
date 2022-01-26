const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function handleSubmit(event){
    event.preventDefault();
    console.dir(loginInput.value);
}

loginForm.addEventListener("submit", handleSubmit);