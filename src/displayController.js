class DisplayController{

    constructor(){
        this.taskList = document.querySelector('.task-list');
        this.nav = document.querySelector('.project-btns');
    }

    displayNavProjectButtons(projects){
        this.nav.textContent = '';
        projects.forEach(proj => {
            let btn = document.createElement('button');
            btn.setAttribute('data', projects.indexOf(proj));
            btn.textContent = proj.getName();
            this.nav.appendChild(btn);
        });
    }

    displayProject(project){
        this.taskList.textContent = '';
        let taskList = project.getTaskList();
        taskList.forEach(task => {
            this.displayTask(task);
        });
    }

    displayTask(task){
        let taskDiv = document.createElement('div');
        let name = document.createElement('div');
        let desc = document.createElement('div');
        let dueDate = document.createElement('div');
        let prio = document.createElement('div');
        let checkbox = document.createElement('input');
        let removeBtn = document.createElement('button');

        checkbox.type = "checkbox";

        taskDiv.classList.add('task');
        name.classList.add('name');
        desc.classList.add('desc');
        dueDate.classList.add('due-date');
        prio.classList.add('prio');

        name.textContent = `Name: ${task.getName()}`;
        desc.textContent = `Description: ${task.getDesc()}`;
        dueDate.textContent = `Due: ${task.getDueDate()}`;
        prio.textContent = `Priority: ${task.getPrio()}`;
        removeBtn.textContent = 'Remove';

        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(name);
        taskDiv.appendChild(desc);
        taskDiv.appendChild(dueDate);
        taskDiv.appendChild(prio);
        taskDiv.appendChild(removeBtn);

        removeBtn.addEventListener("click", function(){
            task.removeTask();
            taskDiv.remove();
        });

        this.taskList.appendChild(taskDiv);
    }
}

export default DisplayController;