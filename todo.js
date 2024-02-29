let input = prompt("What would you like to do?");
const todoList = ["have to go"];
while (input !== "quit") {
    if (input === "new") {
        let newInput = prompt("add some new todo's");
        todoList.push(newInput);
    } else if (input === "list") {
        console.log("**********");
        for (let i = 0; i < todoList.length; i++) {
            console.log(`your ${i}: tasks is - ${todoList[i]}`);
        }
        console.log("**********");
    } else if (input === "delete") {
        let indexToDelete = parseInt(prompt("What is the index to delete"));
        if (!Number.isNaN(indexToDelete)) {
            const deleted = todoList.splice(indexToDelete, 1);
            console.log(`Okay, deleted ${deleted[0]}`);
        } else {
            console.log("Unknown Index :(");
        }
    }
    input = prompt("What would you like to do?");
}

console.log("Okay you quit our app");