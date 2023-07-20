import './style.css';
import Project from './project';
import Task from './task';
import DisplayController from './displayController';

let projects = [];
let p = new Project("My Project");
projects.push(p);

projects.forEach(proj => {console.log(proj.getName())});

let d = new DisplayController();
d.displayProject(p);
d.displayNavProjectButtons(projects);

let addTask = document.getElementById("add-task");

addTask.addEventListener("click", function(){
    let modal = document.querySelector('.modal');
    modal.style.display = 'flex';
});

let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function(e){
    e.preventDefault();

    let name = document.getElementById("tname").value;
    let desc = document.getElementById("tdesc").value;
    let prio = document.getElementById("tprio").value;
    let due = document.getElementById("tdue").value;

    if (name.trim() === '' || desc.trim() === '' || prio.trim() === '' || due.trim() === '') {
        alert("Please fill in all the required fields.");
        return;
    }

    p.addTask(new Task(name, desc, due, prio));

    let modal = document.querySelector('.modal');
    modal.style.display = 'none';

    d.displayProject(p);
});

let addProjectButton = document.querySelector('#add-project');

addProjectButton.addEventListener("click", function(){
    let input = document.getElementById('pname');

    if(input.value != ''){
        projects.push(new Project(input.value));
        d.displayNavProjectButtons(projects);
    }
});