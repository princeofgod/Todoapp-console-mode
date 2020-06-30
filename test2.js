// ------------------A Todo console app-------------------
var todoStorage = [];
var newTask;
var date = new Date();
var dateCreateddateCreated;
let createTodo =(data)=>todoStorage.push(data);
//let del = ()

  class Todo{
    constructor(task,title){
      this.title = title;
      this.task = task;
      this.status = 'pending';
      this.dateCreated = `${date.getFullYear()}-${(date.getMonth()+1)}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    }
  }

  //Searches for already saved tasks
  //   searchTask(title){
    
  //   }
  // //Gets all task
  //   getTasks(){
  //     return todoStorage;
  //   }
  
  //Deletes task from app.
  function deleteTask(title){
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
  function editTasks(whatToEdit,oldValue,newValue){
    todoStorage = todoStorage.sort(el => {
    
      if(el.whatToEdit == oldValue){
        el.whatToEdit = newValue}
    })
  }
//var create = new Todo('Challenge', 'Finish before Wednesday');
createTask(new Todo('Challenge', 'Finish before Wednesday'))
console.log(todoStorage);
