//lab 2 Robert Donnelly
let myTasks:Array<string>=[];

function addTask(task:string):number
{
    return myTasks.push(task);
}

function listAllTasks():void
{
    console.log("beginning of array");
    myTasks.forEach(function(task)
    {
        console.log(task);    
    })
    console.log("end of array");
}

function deleteTasks(task:string):number
{
    let index:number=myTasks.indexOf(task);

    if(index > -1)
    {
        myTasks.splice(index,1);
    }
    else
    {
        console.log("Item: "+task+"not found!");
    }
    return myTasks.length;
}

addTask("element1");
addTask("element2");
addTask("element3");
listAllTasks();
deleteTasks("element2");
listAllTasks();