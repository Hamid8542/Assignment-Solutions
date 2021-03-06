/*
1. Write a recursive function that will print “name: value” to the console for every node in the
following tree data structure. Then write an iterative function that also does this. The following is
the output you should have for the recursive version. The iterative version should be similar, but it
is not necessary for every line to be in the same order.
body: null
div: null
label: Name
input: this was typed by a user
p: This is text in the a paragraph

let node3 = {
    name: "p",
    value: "This is text in the a paragraph",
    children: null
};
let node4 = {
    name: "label",
    value: "Name",
    children: null
};
let node5 = {
    name: "input",
    value: "this was typed by a user",
    children: null
};
let node2 = {
    name: "div",
    value: null,
    children: [node4, node5]
};
let node1 = {
    name: "body",
    children: [node2, node3],
    value: null,
}

function printNames(node1) {
    console.log(node1.name + ":" + node1.value);         
    if (node1.children && node1.children.length > 0) {
        //console.log("Inside IF ", node1.name);
        node1.children.forEach(function (child) {
            //console.log(`Inside forEach parent ${node1.name}  child ${child.name}`)
            printNames(child);
        })
    }
}
console.log(printNames(node1));
