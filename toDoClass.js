"use strict";
exports.__esModule = true;
var toDoClass = /** @class */ (function () {
    function toDoClass() {
        this.myTasks = [];
    }
    toDoClass.prototype.addTask = function (task) {
        return this.myTasks.push(task);
    };
    toDoClass.prototype.listAllTasks = function () {
        console.log("beginning of array");
        this.myTasks.forEach(function (task) { console.log(task); });
        console.log("end of array");
    };
    toDoClass.prototype.deleteTasks = function (task) {
        var index = this.myTasks.indexOf(task);
        if (index > -1) {
            this.myTasks.splice(index, 1);
        }
        else {
            console.log("Item: " + task + "not found!");
        }
        return this.myTasks.length;
    };
    return toDoClass;
}());
var testClass = new toDoClass();
testClass.addTask("element1");
testClass.addTask("element2");
testClass.addTask("element3");
testClass.listAllTasks();
testClass.deleteTasks("element2");
testClass.listAllTasks();
