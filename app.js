let input = prompt("What would you like to do?");
const todos = ["sajal", "shreyash"];
while (input !== "quit" && input !== "q") {
    if (input === "list") {
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
    }
    if (input === "new") {
        const newTodo = prompt("Ok, what is the new todo");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`);
    }

    if (input === "delete") {
        const index = parseInt(prompt("Ok, enter an index to delete:"));
        console.log(index);
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, you deleted ${deleted}`);
        } else {
            console.log("unknown index");
        }
    }


    input = prompt("What would you like to do?");
}
console.log("OK QUIT THE APP");