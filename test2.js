class Todo {
  todoList=[];

  constructor() {
    this.title = '';
    this.task ='';
    this.date = null;
    this.status ='pending'; 
  }
  
  createTask(title,task,date){
    this.title = title;
    this.task = task;
    this.date = new Date();
    }

  addTodo(){
    let title = this.title;
    let task = this.task;
    let status = this.status;
    let date = this.date;
    this.todoList.push({title,task,date,status})
  }
   getTodo(){
     return this.todoList;
   }

  deleteTodo(title){
    this.todoList = this.todoList.filter(el => {
      let h = Object.values(el)
        if(h.includes(title)){
          return false
        }else{
          return true
        }
      })
    console.log(this.todoList);
  }

  searchTodo(value,string){
    return this.todoList.filter(el=> {
      let regex = new RegExp(string, 'gi')

      if(value=='title'){
       if(regex.test(el['title'])){
         return true
       }
      }else if(value == 'task'){
        if(regex.test(el['task'])){
          return true;
        }else{
          return false;
        }
      }
    })
  }
  
  //SOrts todoList
  //The parameter type could either be date or title. If date is used app sorts the list by date,
  //If title is used app sorts the list by title.
  //Order is either ascending or descending.
  
//my own sort
sortTodo(type, order){
    if (type == 'date' && order == 'ascending'){
      return this.todoList.sort((a, b) => (a['date']-b['date']))
    }else if(type == 'date' && order == 'descending'){
      return this.todoList.sort((a, b) => b['date']-a['date'])
    }else if (type == 'title' && order == 'descending'){
      return this.todoList.sort((a, b) => b['title']-a['title'])
    }else if(type == 'title' && order == 'ascending'){
      return this.todoList.sort((a, b) => a['title'] - b['title'])
    }else{
      return 'parameters not correct'
    }  
  }

//Kabir's sort
sortTodo(type, order){
    if (type == 'date' && order == 'ascending'){
       this.todoList.sort((a, b) => a.date.getDate() - b.date.getDate())
    }
    else if(type == 'date' && order == 'descending'){
      this.todoList.sort((a, b) => b.date.getDate() - a.date.getDate())
    }
    else if(type == 'title' && order == 'descending'){
      this.todoList.sort(function(a,b){
        let titleA = a.title.toLowerCase();
        let titleB = b.title.toLowerCase();
        
        if(titleA > titleB){
          return -1;
        }
        else if(titleA < titleB){
          return 1;
        }
        return 0;
      })
    }
    else if(type == 'title' && order == 'ascending'){
      this.todoList.sort(function(a,b){
        let titleA = a.title.toLowerCase();
        let titleB = b.title.toLowerCase();
        
        if(titleA > titleB){
          return 1;
        }
        else if(titleA < titleB){
          return -1;
        }
        
        return 0;
      })
    }
    else{
      return 'parameters not correct'
    }  
  }

  editTaskStatus(title,currentStatus, newStatus){
    for (let x in this.todoList){
      if(title ==x['title'] && x['status'] == currentStatus){
        x['status'] =newStatus.toLowerCase();
        console.log(`Status for ${title} successfully changed!`);
      }else if(title == x['title'] && x['status']==newStatus){
        return 'status previously set!';
      }else if(title != x['title']){
        console.log(`Todo task with title '${title}' does not exist!`)
      }
        // });
    }
    // this.todoList = this.todoList.sort(el => {
    //   if(title == el['title'] && el['status'] == currentStatus){
    //     el['status'] = newStatus.toLowerCase();
    //     console.log(`Status for ${title} successfully changed!`)
    //   }else if(title == el['title'] && el['status']==newStatus){
    //     return 'status previously set!'}
    //   // }else if(title !=el['title']){
    //   //   console.log(`Todo task with title '${title}' does not exist!`)
    //   // }
    // });
  }
  
  //this edits the tasks already stored.
  //The title parameter serves as the primary key that tells the actual object to edit
  //whattoedit is the key(can either be title or task)
  editTodo(title, whattoedit, newValue){
    for (let i in this.todoList){
      if (title == i.title){
        i[whattoedit] = newValue;
      }else if(!newValue){
        console.log('no new value given, property not changed!');
      }else if(title !=i['title']){
        console.log(`The title '${title}' doesn't match any entry, Check and try again!`);
      }
    }
    // this.todoList = this.todoList.forEach(el => {
    //   if(el['title'] == title){
    //     el[whattoedit] = newValue;
    //   }else if(!newValue){
    //     //console.log('no new value given, property not changed!')
    //    }else if(title !=el['title']){
    //     //console.log(`The title '${title}' doesn't match any entry, Check and try again!`)
    //   }
    // })
  }

}

let todo = new Todo()
todo.createTask("Code",'Greatness is of God')
todo.addTodo();
todo.createTask('Jide','Going to Alaso to check an huawei phone')
todo.addTodo();
todo.createTask('Wande','I need to go to Moshalashi to get Check Wande\'s Tab')
todo.addTodo();
todo.createTask('Factman', 'I have a challenge to submit in two days')
todo.addTodo();
console.log(todo.getTodo())
