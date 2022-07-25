let form = document.getElementById("form")
let taskInput = document.getElementById("taskInput")
let wmsg = document.getElementById("wmsg")
let containTask = document.getElementById("containTask")
let save = document.getElementById("save")
let post = document.getElementById("post")
form.addEventListener("submit",(a)=>{
    a.preventDefault()
    formValidation()
})

let formValidation = ()=>{
    if(taskInput.value === ""){
        wmsg.style.color = "red"
        wmsg.innerHTML = "Task cannot be blank"
    }
    else{
        wmsg.innerHTML = "";
        acceptData()
        save.setAttribute("data-bs-dismiss","modal")
        save.click();
        (()=>{
            save.setAttribute("data-bs-dismiss","")
        })();
    }
    
}

let data = {}

let acceptData = ()=>{
    data["text"] = taskInput.value
    createTask()
    
};

let createTask = ()=>{

    containTask.innerHTML += `<div id="tasks">
    <span>
        <input type="checkbox" name="" id="cbox" />
        <p id="post">${data["text"]}</p>
    </span>
    <span>
        <i data-bs-toggle="modal" data-bs-target="#form" onclick="editTask(this)" class="fa-solid fa-pen-to-square"></i>
        <i onclick="deleteTask(this)" class="fa-solid fa-trash-can"></i>
    </span>
</div>`
resetForm()
}

let resetForm = ()=>{
    taskInput.value = ""
};

let deleteTask = (a)=>{
    a.parentElement.parentElement.remove()
}

let editTask = (a)=>{
    let selectTask = a.parentElement.parentElement;
    taskInput.value = selectTask.children[0].children[1].innerHTML;
    a.parentElement.parentElement.remove()
}

post.style.width = "85%"
