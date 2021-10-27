let age = 6  // age type now becomes a number.
// if we try to change it like so:
// age = "string" // we get 'string' cannot be assigned to type number

// const age = 6 // we will get const age:6
// 6 becomes the type for age.  like any number that is 6
// TS is able to make a more specific assumption because:
// const declerations cannot be resigned
// the initial value assigne to age is a number. which is an immutable value type

// 6 is called a literal type


// between 500 and 1000
const Random_Wait_Time =
  Math.round(Math.random() * 500) + 500

let startTime = new Date()
let endTime: Date

//=== Implicit any and type annotations ===//
setTimeout(() => {
  // endTime= 0 // number is not assignable to type 'Date'
  endTime = new Date()
}, Random_Wait_Time)

//=== Function arguments and return values ===//
// function add(a, b) {
//   return a+b // strings? numbers? a mix?
// }

// const result = add(3, "4")

// result

//without type annotations, "anything goes"

 function add(a: number, b: number) {
   return a + b
 }
//  const result = add(3, "4") // 'string' is not assignable to parameter of type number
const result = add(3, 4)