import './style.css';
import Project from './project';
import Task from './task';
import DisplayController from './displayController';


let p = new Project("My Project");

p.addTask(new Task("name","desc", "tomorrow", "critical"));
p.addTask(new Task("name","desc", "tomorrow", "critical"));
p.addTask(new Task("name","desc", "tomorrow", "critical"));
p.addTask(new Task("name","desc", "tomorrow", "critical"));
p.addTask(new Task("name","desc", "tomorrow", "critical"));

p.printAllTasks();
console.log(p.getName());

let d = new DisplayController();

d.displayProject(p);

let addTask = document.getElementById("add-task");

addTask.addEventListener("click", function(){
    let modal = document.querySelector('.modal');
    modal.style.display = 'flex';
});