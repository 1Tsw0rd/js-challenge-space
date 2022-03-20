const todo_form = document.querySelector(".destination-todo-form");
const todo_input = document.querySelector(".destination-todo-input");
const todo_ul = document.querySelector(".destination-todo-ul");

const TODOS_KEY = "destination";

let destination_list = [];

function destination_submit(event){
    event.preventDefault();

    if(destination_list.length < 5) {    

    const todo_new = todo_input.value;
    todo_input.value = null;

    const todo_new_obj = {
        where: todo_new,
        id: Date.now(),
    }
    destination_list.push(todo_new_obj);
    destination_paint(todo_new_obj);
    destination_save();
    } else {
        alert("Sorry.. limited to 5");
        return;
    }
}

function destination_save(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(destination_list));
}

function destination_paint(todo_new_obj){
    const li = document.createElement("li");
    li.id = todo_new_obj.id;
    const span = document.createElement("span");
    span.innerText = `🌏 ${todo_new_obj.where} `;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", destination_delete);
    li.appendChild(span);
    li.appendChild(button);
    todo_ul.appendChild(li);
}

function destination_delete(event){
    const del_target = event.target.parentElement;
    del_target.remove();
    destination_list = destination_list.filter((toDo) => toDo.id !== parseInt(del_target.id));
    destination_save();
}

todo_form.addEventListener("submit", destination_submit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    destination_list = parsedTodos;
    parsedTodos.forEach(destination_paint);
}
