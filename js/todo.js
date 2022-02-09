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
    toDos = toDos.filter((item) =>  item.id !== parseInt(li.id));
    saveTodo();
}

function paintList(newToDosObj) {
    const li = document.createElement("li");
    li.id = newToDosObj.id;
    const span = document.createElement("span");
    span.innerText = newToDosObj.text;
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
    const newToDosObj = {
        text: newToDo,
        id: Date.now(),
    }
    toDos.push(newToDosObj);
    paintList(newToDosObj);
    saveTodo();
}


toDoForm.addEventListener("submit", handleToDoForm);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintList);
}