const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const anchor = document.querySelector("a");

function handleSubmit(event){
    event.preventDefault();
    console.dir(loginInput.value);
}

loginForm.addEventListener("submit", handleSubmit);


function handleClicked(event){
    event.preventDefault();
    console.dir(event);
    alert("go to google!");
}

anchor.addEventListener("click", handleClicked);