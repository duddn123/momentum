const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

const TODOS_KEY = "toDos"

function saveTodo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleDelete(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintList(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
    const button = document.createElement("button");
    button.innerText = "X";
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    button.addEventListener("click", handleDelete);
}

function handleToDoForm(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newToDo);
    paintList(newToDo);
    saveTodo();
}


toDoForm.addEventListener("submit", handleToDoForm);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintList);
}