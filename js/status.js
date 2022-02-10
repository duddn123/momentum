const status = document.querySelector("#status-form");
const statusForm = document.querySelector("#status-form input");




function handleStatus(event){
    event.preventDefault();
}


status.addEventListener("submit", handleStatus);