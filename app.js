const form = document.getElementById("hidden");
let indicator = false;
var temp = 0;
let id = 0;

const table = document.getElementById("table");
const btnSucess = document.getElementById("addTodo");

form.style.display = "none";
btnSucess.addEventListener("click", (e) => {
    btnSucess.style.display = "none";
    document.getElementById("button_submit").defaultValue="add";
    form.style.display = "block";
})

//update specific row
function updateTask(id){
    indicator = true;
    temp = id;
    document.getElementById("button_submit").defaultValue="Update";
    form.style.display = "block";
}

//delete specific row
function deleteTask(dId){
    let conform = window.confirm("Are you sure you want to delete this task?");
    if (conform)
        document.getElementById('table').removeChild(document.getElementById(`tr-${dId}`));
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    lists = {
        "title": document.form.title.value,
        "task": document.form.task.value,
        "date": document.form.date.value
    }

    // to create and add new element
    if(!indicator) {
                const todo = document.createElement("tr");
                todo.setAttribute("id", `tr-${id}`);
                todo.innerHTML = `
                                    <td>${lists.title}</td>
                                    <td>${lists.task}</td>
                                    <td>${lists.date}</td>
                                    <td><button id="update-${id} " class = "btn btn-success" onclick="updateTask(${id})">Update</button></td>
                                    <td><button id="delete-${id}" class = "btn btn-warning" onclick="deleteTask(${id})">Delete</button></td>`;
                table.appendChild(todo);
                btnSucess.style.display = "block";
                id++;
                }
    else{
        // update the specific row
        let tempid = `tr-${temp}`;
        row = document.getElementById(tempid);
        row.innerHTML = `
                            <td>${lists.title}</td>
                            <td>${lists.task}</td>
                            <td>${lists.date}</td>
                            <td><button id="update-${temp} " class = "btn btn-success" onclick="updateTask(${temp})">Update</button></td>
                            <td><button id="delete-${temp}" class = "btn btn-warning" onclick="deleteTask(${temp})">Delete</button></td>
                `;
        indicator = false;
    }

    form.style.display = "none";
    form.reset();
});
