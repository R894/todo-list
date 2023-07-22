class Task {
  constructor(name, desc, dueDate, prio) {
    this.name = name;
    this.desc = desc;
    this.dueDate = dueDate;
    this.prio = prio;
    this.removed = false;
    this.project = '';
  }

  setProject(project) {
    this.project = project;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getDesc() {
    return this.desc;
  }

  setDesc(desc) {
    this.desc = desc;
  }

  getDueDate() {
    return this.dueDate;
  }

  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }

  getPrio() {
    return this.prio;
  }

  setPrio(prio) {
    this.prio = prio;
  }

  printTask() {
    // eslint-disable-next-line no-console
    console.log(`${this.name} ${this.desc} ${this.dueDate} ${this.prio}`);
  }

  removeTask() {
    this.project.removeTask(this);
  }
}

export default Task;
