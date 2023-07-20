import './style.css';
import Project from './project';
import Task from './task';
import DisplayController from './displayController';

let projects = [];
let p = new Project("My Project");
projects.push(p);

let dede = new Project("It works lol");
projects.push(dede);

projects.forEach(proj => {console.log(proj.getName())});

let d = new DisplayController();

d.displayProject(p);

d.displayNavProjectButtons(projects);

let addTask = document.getElementById("add-task");

addTask.addEventListener("click", function(){
    let modal = document.querySelector('.modal');
    modal.style.display = 'flex';
});