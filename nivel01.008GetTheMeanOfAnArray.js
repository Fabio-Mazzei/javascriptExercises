/* Get the mean of an array. It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script. Return the average of the given array rounded down to its nearest integer. The array will never be empty. */

let arrayNotes = [8.7, 9.2, 4.5, 10]
let sum = 0

function meanOfArray(array) {
    for (i = 0; i < array.length; i++) {
    sum += array[i]
    }
    return sum / array.length
}
console.log(meanOfArray(arrayNotes))