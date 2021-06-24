/* String repeat - Write a function called repeatStr which repeats the given string string exactly n times. Example: repeatStr(6, "I") // "IIIIII" or repeatStr(5, "Hello") // "HelloHelloHelloHelloHello" - FUNDAMENTALS */

function repeatStr(times, str) {
    arrayTimes = []
    i = 0
    while (i < times) {
        arrayTimes.push(str)
        i++
    }
    return arrayTimes.join("")
}
console.log(repeatStr(3, "any"))