// ------------------A Todo console app-------------------
var todoStorage = [];
var newTask;
var date = new Date();
var dateCreateddateCreated;
let append =(data)=>todoStorage.push(data);
//let del = ()

class Todo{
  constructor(task,title){
    this.title = title;
    this.task = task;
    this.status = 'pending';
    this.dateCreated = `${date.getFullYear()}-${(date.getMonth()+1)}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }
  

// Creating new tasks
  createTask(title,task){
    todoStorage.forEach(task=>{
      if(title == task.title){
        return 'Task already present'
      }else{
        this.newTask = {'title':title,'task':task,'status':'pending','date':this.dateCreated};
        todoStorage.push(this.newTask);
        return this.todoStorage;
      }   
    });
  }

  //Searches for already saved tasks
  //   searchTask(title){
    
  //   }
  // //Gets all task
  //   getTasks(){
  //     return todoStorage;
  //   }
  //Deletes task from app.
  deleteTask(title){
    todoStorage = todoStorage.filter(el => {
      let h = Object.values(el)
        if(h.includes(title)){
          return false
        }else{
          return true
        }})
    console.log(todoStorage);
  }

   //Edit function
  editTasks(whatToEdit,oldValue,newValue){
    todoStorage = todoStorage.sort(el => {
      if(el.whatToEdit == oldValue){
        el.whatToEdit = newValue}
    })
  }
  //Sorting function
  sortTasks(param, order){
    if (param == date && order == ascending){
      return todoStorage.sort((a, b) => (a.date-b.date))
    }else if(param == date && order == descending){
      return todoStorage.sort((a, b) => b.date-a.date)
    }else if (param == title && order == descending){
      return todoStorage.sort((a, b) => b.title-a.title)
    }else if(param == title && order == ascending){
      return todoStorage.sort((a, b) => a.title - b.title)
    }else{
      return 'parameters not correct';
    }
  }
}
//var create = new Todo('Challenge', 'Finish before Wednesday');
append(new Todo('Challenge', 'Finish before Wednesday'))
console.log(todoStorage)

