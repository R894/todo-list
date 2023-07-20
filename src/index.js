import './style.css';
import Project from './project';
import Task from './task';

let p = new Project("Project");

p.addTask(new Task("name","desc", "tomorrow", "critical"));
p.addTask(new Task("name","desc", "tomorrow", "critical"));
p.addTask(new Task("name","desc", "tomorrow", "critical"));
p.addTask(new Task("name","desc", "tomorrow", "critical"));
p.addTask(new Task("name","desc", "tomorrow", "critical"));

p.printAllTasks();
console.log(p.getName());