// UNIT 2 ASSESSMENT: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain WHY your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Alpha 2024"
console.log(cohort.split(" "))

// a) Your answer: [ "Alpha", "2024" ]
// b) Verify and explain: .split() is a string method that turns a string to an array. Where the string is split depends on what is inside the quotation marks.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: "Hello, LEARN Student!"
// b) Verify and explain: Oops! The console showed "undefined" because the function is missing a return statement! 😵

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [ 11, 13, 15 ]
// b) Verify and explain: .filter() is a higher order fxn that returns a modified version of the original array based on whether or not the condition following the fat arrow is true.

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: In this example, dot notation is used to access the "languages" property within the "myCodingSkills" object. Bracket notation is used on the "languages" property because its key-value pair is an array whose zeroth position is "JavaScript".

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Alpha"
    this.year = 2024
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: Learn { student: "George", cohort: "Alpha", year: 2024 }
// b) Verify and explain: Sweet! I wasn't sure if Learn came before the object or learnStudent. A new instance of an object is being created using the Learn class as a blueprint. The constructor is expecting one argument to be passed which will be the value associated with the student key.
