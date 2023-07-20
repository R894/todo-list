class Task{
    constructor(name, desc, dueDate, prio){
        this.name = name;
        this.desc = desc;
        this.dueDate = dueDate;
        this.prio = prio;
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    getDesc(){
        return this.desc;
    }

    setDesc(desc){
        this.desc = desc;
    }

    getDueDate(){
        return this.dueDate;
    }

    setDueDate(dueDate){
        this.dueDate = dueDate;
    }

    getPrio(){
        return this.prio;
    }

    setPrio(prio){
        this.prio = prio;
    }

    printTask(){
        console.log(`${this.name} ${this.desc} ${this.dueDate} ${this.prio}`)
    }
}

export default Task;