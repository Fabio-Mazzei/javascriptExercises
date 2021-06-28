/* Quarter of the year. Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number. For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter. FUNDAMENTALS */

let month = 7
if (month < 1 || month > 12) {
    console.log("Invalid month")
} else if (month > 0 && month < 4) {
    console.log("First quarter of the year")
} else if (month > 3 && month < 7) {
    console.log("Second quarter of the year")
} else if (month > 6 && month < 10) {
    console.log("Third quarter of the year")
} else if (month > 9 && month < 13) {
    console.log("Fourth quarter of the year")
}