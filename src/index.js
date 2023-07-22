import './style.css';
import Project from './project';
import Task from './task';
import DisplayController from './displayController';

const projects = [];

let currentSelectedProject = 0;

const p = new Project('My Project');
projects.push(p);

const d = new DisplayController();
d.displayProject(p);
d.displayNavProjectButtons(projects);

const addTask = document.getElementById('add-task');

addTask.addEventListener('click', () => {
  const modal = document.querySelector('.modal');
  modal.style.display = 'flex';
});

const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();

  const name = document.getElementById('tname').value;
  const desc = document.getElementById('tdesc').value;
  const prio = document.getElementById('tprio').value;
  const due = document.getElementById('tdue').value;

  if (name.trim() === '' || desc.trim() === '' || prio.trim() === '' || due.trim() === '') {
    // eslint-disable-next-line no-alert
    alert('Please fill in all the required fields.');
    return;
  }

  const newTask = new Task(name, desc, due, prio);
  newTask.setProject(projects[currentSelectedProject]);
  projects[currentSelectedProject].addTask(newTask);

  const modal = document.querySelector('.modal');
  modal.style.display = 'none';

  d.displayProject(projects[currentSelectedProject]);
});

const addProjectButton = document.querySelector('#add-project');

function updateListeners() {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < projects.length; i++) {
    const projButton = document.querySelector(`[data='${i}']`);
    // eslint-disable-next-line no-loop-func
    projButton.addEventListener('click', () => {
      currentSelectedProject = i;
      d.displayProject(projects[currentSelectedProject]);
    });
  }
}

addProjectButton.addEventListener('click', () => {
  const input = document.getElementById('pname');

  if (input.value !== '') {
    projects.push(new Project(input.value));
    d.displayNavProjectButtons(projects);
    updateListeners();
  }
});
