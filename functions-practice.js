// Functions Practice 1

// Below are exercises in writing functions. Beneath each prompt write the code to fulfill the exercise requirement.

// Exercise 1
// Write a function called marco that logs "polo" to the screen.
console.log('Exercise 1')

function marco() {
  console.log('polo')
}
marco()
//
// Exercise 2
//
// Write a function called greeter that takes a name as an argument and logs a greeting with that name to the screen.
console.log('Exercise 2')

function greeter(name) {
  console.log('Hello ' + name)
}
greeter('AJ')
//
// Exercise 3
//
// Write a function called oddOrEven that takes an number as an argument and logs whether the number is odd or even.
console.log('Exercise 3')
////Create 2 random numbers from 1-10 for use in the following exercises
var randomNumber = Math.floor(Math.random() * 10 + 1)
var randomNumber2 = Math.floor(Math.random() * 10 + 1)
////declare function that takes a number as an argument
function oddOrEven(num) {
  //test if divisible by 2
  if (num % 2 != 0) {
    console.log(num + ' is odd')
  } else {
    console.log(num + ' is even')
  }
}
oddOrEven(randomNumber)
//
// Exercise 4
//
// Write a function called triple that takes an number as an argument and logs the result of that number multiplied by 3.
console.log('Exercise 4')

function triple(num) {
  console.log(num * 3)
}
triple(randomNumber)
//
// Exercise 5
//
// Write a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
console.log('Exercise 5')

function multiply(num1, num2) {
  console.log(num1 * num2)
}
multiply(randomNumber, randomNumber2)
//
// Exercise 6
//
// Write a function called divisibleBy that takes two numbers as arguments and logs whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
console.log('Exercise 6')

function divisibleBy(num1, num2) {
  if (num1 % num2 === 0) {
    console.log(num1 + ' is divisible by ' + num2)
  } else {
    console.log(num1 + ' is not divisble by ' + num2)
  }
}
divisibleBy(randomNumber, randomNumber2)
//
// Exercise 7
//
console.log('Exercise 7')
// Consider this variable:
var product = {
  name: "chair",
  price: 14.99
}
// Write a function called describeProduct takes product as an argument and logs "The product is a chair. It costs $14.99".
function describeProduct(item) {
  console.log('The product is a ' + item.name + '. It costs $' + item.price)
}
describeProduct(product)
//
// Exercise 8
//
console.log('Exercise 8')
// Consider this function:
function message(product, inBudget) {
  if (inBudget) {
    console.log("Product is within budget")
    return "Product is within budget"
  } else {
    console.log("Product is beyond budget")
    return "Product is beyond budget"
  }
}
// And consider this variable:
var product = {
  name: "OledMonitor",
  price: 300.00
}
var budget = 275.00
// Write a function checkBudget that takes a product, budget and the message function as arguments, determines whether the product is within budget and returns the result of the message function.
//create result variable necessary for message function

function checkBudget(product, budget, funct) {
  //check whether the product is within budget
  if (product.price <= budget) {
    funct(product, true)
  } else {
    funct(product, false)
  }
}
checkBudget(product, budget, message)
//
// Exercise 9
//
// Refactor the previous exercise to replace "Product" in the return to the name of the product.
// For example, checkBudget(product, budget, message) ----> "OledMonitor is beyond budget"
console.log('Exercise 9')

function message2(product, inBudget) {
  if (inBudget) {
    console.log(`${product.name} is within budget`)
    return `${product.name} is within budget`
  } else {
    console.log(`${product.name} is beyond budget`)
    return `${product.name} is beyond budget`
  }
}
checkBudget(product, budget, message2)