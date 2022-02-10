const important = document.querySelector("#important");
const importantInput = document.querySelector("#important input");
const importantList = document.querySelector("#important-list");

function paintImportant(importantValue){
    const box = document.createElement("div");
    const today = document.createElement("span");
    today.innerText = "TODAY";
    const importantToday = document.createElement("span");
    importantToday.innerText = importantValue;
    box.appendChild(today);
    box.appendChild(importantToday);
    importantList.appendChild(box);
}

function handleImportant(event){
    event.preventDefault();
    const importantValue = importantInput.value;
    localStorage.setItem("importantThing", importantValue);
    important.remove();
    paintImportant(importantValue);
}



important.addEventListener("submit", handleImportant);