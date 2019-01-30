import{toDoInterface} from'./interface';

class toDoClass implements toDoInterface
    {
     myTasks:Array<string>=[];
    
        addTask(task:string):number

        {
            return this.myTasks.push(task);
        }

        listAllTasks():void
        {
            console.log("beginning of array");
            this.myTasks.forEach(function(task) {console.log(task);} )
            console.log("end of array");
        }    

        deleteTasks(task:string):number
        {
            let index:number=this.myTasks.indexOf(task);
        
            if(index > -1)
            {
                this.myTasks.splice(index,1);
            }
            else
            {
                console.log("Item: "+task+"not found!");
            }
            return this.myTasks.length;
        }

    }

    let testClass = new toDoClass();
    testClass.addTask("element1");
    testClass.addTask("element2");
    testClass.addTask("element3");
    testClass.listAllTasks();
    testClass.deleteTasks("element2");
    testClass.listAllTasks();
