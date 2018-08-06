// Loops/Iteration Practice

// Below are exercises in using loops and iteration. Beneath each prompt write the code to fulfill the exercise requirement.

// Exercise 1
//
console.log('Exercise 1')
// Write a for loop that logs each number from 1 - 20.
for (i = 1; i < 21; i++) {
  console.log(i)
}
//
// Exercise 2
//
console.log('Exercise 2')
// Write a for loop that logs the result of each number from 1 - 20 tripled.
for (i = 1; i < 21; i++) {
  console.log(i * 3)
}
//
// Exercise 3
//
console.log('Exercise 3')
// Consider this variable:
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Write for loop that logs each number.
for (i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
}
//
// Exercise 4
//
console.log('Exercise 4')
// Create a for loop that logs each EVEN number from 1-20, and in the place of every odd number, returns the word "ODD"
// So the result should be: [ODD, 2, ODD, 4, ODD, 6 ....]
for (i = 1; i < 21; i++) {
  if (i % 2 != 0) {
    console.log('ODD')
  } else {
    console.log(i)
  }
}
//
// Exercise 5
//
console.log('Exercise 5')
// Your friend is training for a marathon and you are going to help them. They are running on a track, but often lose count of how many loops they have done. You need to create a for loop to log their progress as they run. Create the code to satisify the pseudo code below:

// Initial number of laps is 0
var laps = 0
// Track size: 1/4 mile
var trackSize = .25
// Goal: Run 8 miles
var goal = 8

// for(....create the loop condition ....) {
for (i = 0; i <= goal; i = i + trackSize) {
  // log laps until your friend has run their 8 miles
  console.log(i / trackSize)
  if (i === 4 || i === 6 || i === 7) {
    console.log('Keep it up fam')
  }
  // }
}
// EXTRA: For extra challenge, add code that logs an encouraging message to your friend at the 4, 6, and 7 mile markers
//
// Exercise 6
//
console.log('Exercise 6')
// Use a forEach on the numbers variable above to log each number.
numbers.forEach(function (val) {
  console.log(val)
})
//
// Exercise 7
//
console.log('Exercise 7')
// Use a forEach on the numbers variable above to log the result of each number doubled.
numbers.forEach(function (val) {
  console.log(val * 2)
})
//
// Exercise 8
//
console.log('Exercise 8')
// Use a for loop to log each number from the numbers variable above.
for (i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
}
//
// Exercise 9
//
// Use a for loop to log whether each number from the numbers variable above is odd or even.
console.log('Exercise 9')
for (i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 != 0) {
    console.log(numbers[i] + ' is odd')
  } else {
    console.log(numbers[i] + ' is even')
  }
}
//
// Exercise 10
//
console.log('Exercise 10')
// Use a forEach on the numbers variable above to log whether each number is odd or even.
numbers.forEach(function (val) {
  if (val % 2 != 0) {
    console.log(val + ' is odd')
  } else {
    console.log(val + ' is even')
  }
})
//
// Exercise 11
//
console.log('Exercise 11')
// Use for loop to log each number from the numbers variable above in reverse.
for (i = numbers.length; i > 0; i--) {
  console.log(numbers[i - 1])
}
//
// Exercise 12
//
console.log('Exercise 12')
// Use a forEach on the numbers variable above to log each number in reverse. Hint: Another javascript array method might be necessary.
numbers.reverse().forEach(function (val) {
  console.log(val)
})