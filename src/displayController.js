class DisplayController{

    constructor(){
        this.taskList = document.querySelector('.task-list');
        this.nav = document.querySelector('.project-btns');
    }

    displayNavProjectButtons(projects){
        projects.forEach(proj => {
            let btn = document.createElement('button');
            btn.classList.add(`data='${projects.indexOf(proj)}'`);
            btn.textContent = proj.getName();
            this.nav.appendChild(btn);
        });
        
    }

    displayProject(project){
        this.taskList.textContent = '';
        let taskList = project.getTaskList();
        taskList.forEach(task => {
            this.displayTask(task)
        });
    }

    displayTask(task){
        let taskDiv = document.createElement('div');
        let name = document.createElement('div');
        let desc = document.createElement('div');
        let dueDate = document.createElement('div');
        let prio = document.createElement('div');

        taskDiv.classList.add('task');
        name.classList.add('name');
        desc.classList.add('desc');
        dueDate.classList.add('due-date');
        prio.classList.add('prio');

        name.textContent = task.getName();
        desc.textContent = task.getDesc();
        dueDate.textContent = task.getDueDate();
        prio.textContent = task.getPrio();

        taskDiv.appendChild(name);
        taskDiv.appendChild(desc);
        taskDiv.appendChild(dueDate);
        taskDiv.appendChild(prio);

        this.taskList.appendChild(taskDiv);
    }
}

export default DisplayController;