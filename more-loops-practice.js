// Loops/Iteration Practice 2: while/do while

// Below are exercises to get you practicing with while and for in loops. Beneath each prompt write the code to fulfill the exercise requirement.

// Exercise 1
console.log('Exercise 1')
// Write a while loop that logs each number from 0 to 10.
var i = 0
while (i < 11) {
  console.log(i)
  i++
}

// Exercise 2
console.log('Exercise 2')
// Write a while loop that logs each number from 10 to 0.
//i is starting at 11 from previous problem
while (i > 0) {
  i--
  console.log(i)
}
// Exercise 3
console.log('Exercise 3')
// Write a do while loop that logs each number from 0 to 10
do {
  console.log(i)
  i++
} while (i < 11)
// Exercise 4
console.log('Exercise 4')
// Write a do while loop that logs each number from 10 to 0.
//i is starting at 11 from previous problem
do {
  i--
  console.log(i)
} while (i > 0)

// Exercise 5
console.log('Exercise 5')
// Write a function that takes a number as an argument and uses a while loop to count up to that number from 0.
function countWhile(num) {
  while (i < num + 1) {
    console.log(i)
    i++
  }
}
countWhile(10)

// Exercise 6
console.log('Exercise 6')
// Write a function that takes a number as an argument and uses a do while loop to count up to that number from 0.
var count = num => {
  i = 0
  do {
    console.log(i)
    i++
  } while (i < num + 1)
}
count(10)

// Exercise 7
// Write a function that uses while loop to prompt a user for an even number until their entry is even.

// Exercise 8
// Write a function that uses a do while loop to prompt a user for an odd number until their entry isodd.

// Exercise 9
// Write a function that uses a while loop to prompt a user for their hobbies until it has a list of 3 different hobbies. Use an alert or a confirm to show the user all the hobbies they entered.


// Exercise 10
// Write a function that uses a do a while loop to prompt a user for their hobbies until it has a has a list of 3 different hobbies. Use an alert or a confirm to show the user all the hobbies they entered.