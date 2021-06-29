/* Write a function RemoveExclamationMarks which removes all exclamation marks from a given string. FUNDAMENTALS */

function removeExclamationMarks(str) {
    let arr = str.split("")
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === "!") {
            arr.splice(i, 1)
            i--
        }
    }
    strRemovedExMark = arr.join("")
    return strRemovedExMark
}
console.log(removeExclamationMarks("Go!!"))