const readline=require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("Factorial Application");
console.log("------------------------------");
console.log("1. Say Hello");
console.log("2. Factorial");
console.log("3. Exit Application");
console.log("------------------------------");

r1.question("enter your choice (1-3): ", choice =>{
    console.log(choice);
})