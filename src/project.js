class Project {
  constructor(name) {
    this.name = name;
    this.taskList = [];
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  addTask(task) {
    this.taskList.push(task);
  }

  removeTask(task) {
    this.taskList.pop(task);
  }

  getTaskList() {
    return this.taskList;
  }

  printAllTasks() {
    this.taskList.forEach((element) => element.printTask());
  }
}

export default Project;
