/* Write a function to convert a name into initials. This kata strictly takes two words with one space in between them. The output should be two capital letters with a dot separating them. It should look like this: Sam Harris => S.H Patrick Feeney => P.F */

function inicials(name) {
    separateName = name.split(" ")
    firstLetter = separateName[0][0]
    secondLetter = separateName[1][0]
    concatLetters = `${firstLetter}.${secondLetter}`
        return concatLetters
}
console.log(inicials("Any Name"))