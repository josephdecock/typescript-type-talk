import * as _ from "lodash";

class Todo {
    constructor(public description: string, public assignee: string) {}
}

var todos: Todo[] = [
    new Todo("Write some code", "Joe"),
    new Todo("Write some unit tests", "Joe"),
    new Todo("Go to meetings", "Tom"),
    new Todo("Go to meetings, again", "Tom"),
    new Todo("Go to still more meetings", "Tom")
];

var grouped = _.groupBy(todos, "assignee");

// Observe the types of these two variables (hover in VS Code)
const todosForMe = grouped['Joe'];
const todosForBoss = grouped.Tom;

// TODO - Fix this type error
grouped.Brett = new Todo("Cause a type Error", "Brett");

function anythingWorksOnGroups(name: string) {
    // What is the type of g?
    // Does that type depend on the name value?
    const g = grouped[name];
}



const nodes: NodeList = document.querySelectorAll('div');

// Type-Safe Operations
const n1: Node = nodes[0]; 
const len: number = nodes['length'];
const n2 = nodes.item(12);

// TODO - Fix this type error (perhaps we meant to use document.createElement)
nodes[0] = 'div';

function anythingWorksOnLists(i: number) {
    // What is the type of n?
    // Does that type depend on the value of i?
    const n = nodes[i]; 
}