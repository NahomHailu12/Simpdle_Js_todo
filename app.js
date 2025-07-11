console.log("JS is configred");
todolist = []

const form = document.getElementById("hidden");
form.style.display = "none";
let id = 0;

const btnSucess = document.getElementById("addTodo");
btnSucess.addEventListener("click", (e) => {
     form.style.display = "block";
     form.id.value = id;
})

let indicator = false;
const table = document.getElementById("table");

var temp = 0;
function updateTask(id){
    indicator = true;
    temp = id;
    console.log(id);
    form.style.display = "block";
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    lists = {
        "title": document.form.title.value,
        "task": document.form.task.value,
        "date": document.form.date.value
    }

    if(!indicator) {
                const todo = document.createElement("tr");
                todo.setAttribute("id", `tr-${id}`);
                todo.innerHTML = `
                <td>${lists.title}</td>
                <td>${lists.task}</td>
                <td>${lists.date}</td>
                <td><button id="update-${id} " class = "btn btn-success" onclick="updateTask(${id})">Update</button></td>
                <td><button id="delete-${id}" class = "btn btn-warning" onclick="document.getElementById('table').removeChild(document.getElementById('tr-${id}'))">Delete</button></td>
                `;
                table.appendChild(todo);
                id++;
                }
    else{
        let tempid = `tr-${temp}`;
        row = document.getElementById(tempid);
        row.innerHTML = `
                <td>${lists.title}</td>
                <td>${lists.task}</td>
                <td>${lists.date}</td>
                <td><button id="update-${temp} " class = "btn btn-success" onclick="updateTask(${temp})">Update</button></td>
                <td><button id="delete-${temp}" class = "btn btn-warning" onclick="document.getElementById('table').removeChild(document.getElementById('tr-${temp}'))">Delete</button></td>
                `;
        indicator = false;
    }

    form.style.display = "none";
    form.reset();
});
