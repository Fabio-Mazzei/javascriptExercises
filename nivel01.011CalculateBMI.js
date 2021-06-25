/* Write function bmi that calculates body mass index (bmi = weight / height2). if bmi <= 18.5 return "Underweight". if bmi <= 25.0 return "Normal". if bmi <= 30.0 return "Overweight". if bmi > 30 return "Obese". FUNDAMENTALS */

let bmi = (w, h) => {
    if (w <= 0 || h <= 0) {
        return "Invalid number"
    } else {
        if (w / Math.pow(h, 2) <= 18.5) {
            return "Underweight"
        } else if (w / Math.pow(h, 2) <= 25) {
            return "Normal"
        } else if (w / Math.pow(h, 2) <= 30) {
            return "Overweight"
        } else if (w / Math.pow(h, 2) > 30) {
            return "Obese"
        }
    }
}
console.log(bmi(70.4, 1.77))