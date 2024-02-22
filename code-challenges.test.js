// UNIT 2 ASSESSMENT: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// Explain your code:

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.
// had to reference notes to remember exact syntax of test
// describe("functionName", () => {
//     it("short description of what fxn should do", () => {
//       expect(functionName(input)).toEqual(output)
//     })
//   } )
describe("divisibleBy3", () => {
    const object1 = { number: 15 }
    // Expected output: "15 is divisible by three"
    const object2 = { number: 0 }
    // Expected output: "0 is divisible by three"
    const object3 = { number: -7 }
    // Expected output: "-7 is not divisible by three"

    it("decides if num is divisible by 3", () => {
        expect(divisibleBy3(object1)).toEqual("15 is divisible by three")
        expect(divisibleBy3(object2)).toEqual("0 is divisible by three")
        expect(divisibleBy3(object3)).toEqual("-7 is not divisible by three")
    })
} )
// ReferenceError: divisibleBy3 is not defined

// b) Create the function that makes the test pass.
// input: object holding a num
// output: string stating if it is divisible or not
// logic: 
// -conditional using modulo 
// -dot notation to access number property

// const divisibleBy3 = (numObj) => {
//     let num = numObj.number
//     if (num % 3 === 0) {
//         return `${num} is divisible by three`
//     } else {
//         return `${num} is not divisible by three`
//     }
// }

// going to attempt a ternary because they're super helpful in react
const divisibleBy3 = (numObj) => {
    // logic preceding "?" is the condition
    // before colon will return if condition is T
    // after colon will return if condition is F
    return numObj.number % 3 === 0 ? `${numObj.number} is divisible by three` : `${numObj.number} is not divisible by three`
}

// Explain your code: These two functions will return a string indicating whether the object passed's number property is divisible by 3 or not.

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
// describe("functionName", () => {
//     it("short description of what fxn should do", () => {
//       expect(functionName(input)).toEqual(output)
//     })
//   } )
describe("capitalizer", () => {
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
    // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

    it("returns an array with all the first letters cap'd", () => {
        expect(capitalizer(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(capitalizer(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})
// ReferenceError: capitalizer is not defined

// b) Create the function that makes the test pass.
// input: arr of words
// output: arr of words with first letter cap'd
// logic: 
// .map() to iterate through arr and return arr of exact same length
// .split() method to turn word to arr of letters
// inner .map() to iterate through individual letters
// .toUpperCase() to capitialize letter if the index is 0
// .join() on inner map

// const capitalizer = (strArr) => {
//     return strArr.map(word => {
//         let letterArr = word.split("") // this should give me strArr.length many arrays with each letter being an index
//         return letterArr.map((letter, i) => {
//             if (i === 0) {
//                 return letter.toUpperCase()
//             } else {
//                 return letter
//             }
//         }).join("")
//     })
// }

// going to attempt to make more concise
const capitalizer = (strArr) => {
    return strArr.map(word => word.split("").map((letter, i) => i === 0 ? letter.toUpperCase() : letter).join(""))
}

// Explain your code: Both of these functions will return an array of strings with the first letter capitalized in every string.
