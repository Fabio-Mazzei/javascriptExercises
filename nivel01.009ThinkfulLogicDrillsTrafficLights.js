/* Thinkful - Logic Drills: Traffic light. You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again. Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to. For example, update_light('green') should return 'yellow'. */

let currentLight = "red"
let changeTo

if (currentLight == "green" || currentLight == "Green") {
    changeTo = "Yellow"
} else if (currentLight == "yellow" || currentLight == "Yellow") {
    changeTo = "Red"
} else if (currentLight == "red" || currentLight == "Red") {
    changeTo = "Green"
} else {
    console.log("Invalid color light")
}
console.log(changeTo)