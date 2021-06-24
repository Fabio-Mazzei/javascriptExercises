/* Reversed Words - Complete the solution so that it reverses all of the words within the string passed in. Example: "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The" - ALGORITHMS | STRINGS */

let sentence = "Any sentence can be inverted"
let invertedArray = []
let invertedSentence

splitWords = sentence.split(" ")
for (i = splitWords.length - 1; i >= 0; i--) {
    invertedArray.push(splitWords[i])
}
invertedSentence= invertedArray.join(" ")
console.log(invertedSentence)