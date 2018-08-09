// Map vs. For Loop Practice

// Below are exercises to get you seeing the differences between using a map and a for loop. Beneath each prompt write the code to fulfill the exercise requirement.

//
// Exercise 1
//
console.log('Exercise 1')
// Consider this variable:
var nums = [1, 2, 3, 4, 5]
// Write a for loop that saves the result of each number multiplied by 5 to another array.
var timesFive = []
for (i = 0; i < nums.length; i++) {
  timesFive.push(nums[i] * 5)
}
console.log(timesFive)
//
// Exercise 2
//
console.log('Exercise 2')
// Use a map on the nums array that saves the result of each number multiplied by 5 to another array.
var xFive = nums.map(num => num * 5)
console.log(xFive)
//
// Exercise 3
//
console.log('Exercise 3')
// Consider this variable:
var numbers = [11, 22, 33, 44, 55, 66]
// Write a for loop that saves all numbers in the numbers array that are evenly divisible by 3 into another array.
var divisThree = []
for (i = 0; i < numbers.length; i++) {
  if (numbers[i] % 3 === 0) {
    divisThree.push(numbers[i])
  }
}
console.log(divisThree)
//
// Exercise 4
//
// TODO: FIX THIS WHAT DO I DO
console.log('Exercise 4')
// Use map on the numbers array to save any numbers from the array that are evenly divisible by 3 into another array.
var divByThree = numbers.filter(x => {
  return x % 3 === 0
  // }).map(val => {
  //   return val
})
console.log(divByThree)
//
// Exercise 5
//
console.log('Exercise 5')
// Consider this variable:
var toons = [{
  name: "Tom",
  animal: "cat"
}, {
  name: "Jerry",
  animal: "mouse"
}, {
  name: "Bugs",
  animal: "rabbit"
}, {
  name: "Daffy",
  animal: "duck"
}, {
  name: "Felix",
  animal: "cat"
}, {
  name: "Oswald",
  animal: "rabbit"
}]
// Write a for loop that saves all cat characters to another array.
var cats = []
for (i = 0; i < toons.length; i++) {
  if (toons[i].animal === 'cat') {
    cats.push(toons[i])
  }
}
console.log(cats)
//
// Exercise 6
//
console.log('Exercise 6')
// Use map on the toons array to save all rabbit characters to another array.
//TODO: FIX THIS TOO
var rabbits = toons.filter(x => {
  return x.animal === 'rabbit'
  // }).map(val => {
  //   return val
})
console.log(rabbits)
//
// Exercise 7
//
console.log('Exercise 7')
//Write a for loop to save the names of each character to another array.
var names = []
for (i = 0; i < toons.length; i++) {
  names.push(toons[i].name)
}
console.log(names)
//
// Exercise 8
//
console.log('Exercise 8')
// Use map on the toons array to save a description of each character to another array.
var description = toons.map(x => {
  return `${x.name} is a ${x.animal}`
})
console.log(description)
//
// Exercise 9
//
console.log('Exercise 9')
// Consider this variable:
var people = [{
  firstName: "Alan",
  lastName: "Grant"
}, {
  firstName: "Ellie",
  lastName: "Sattler"
}, {
  firstName: "Ian",
  lastName: "Malcolm"
}]
// Write a for loop that creates a new object for every person that has a key value for firstName, lastName, and fullName and saves each new object into another array.
var fullNames = []
for (i = 0; i < people.length; i++) {
  //NOTE: Method 1
  // fullNames[i] = {
  //   firstName: people[i].firstName,
  //   lastName: people[i].lastName,
  //   fullName: `${people[i].firstName} ${people[i].lastName}`
  // }
  //NOTE: Method 2
  fullNames = {
    firstName,
    LastName
  } = people
  fullNames[i].fullName = `${people[i].firstName} ${people[i].lastName}`

}
console.log(fullNames)
//
// Exercise 10
//
console.log('Exercise 10')
// Refactor the above code to use a map on the people array to achieve the same result.
var mapFullNames = people.map(x => {
  return {
    firstName: x.firstName,
    lastName: x.lastName,
    fullName: `${x.firstName} ${x.lastName}`
  }
})
console.log(mapFullNames)
//
// Exercise 11
//
console.log('Exercise 11')
// Consider this function:
function addTitle(person) {
  return "Dr. " + person.firstName + " " + person.lastName
}
// Write a for loop that iterates through each person in the people array and stores the result of addTitle on each element to another array.
var titles = []
for (i = 0; i < people.length; i++) {
  titles.push(addTitle(people[i]))
}
console.log(titles)
//
// Exercise 12
//
console.log('Exercise 12')
// Use map on the run addTitle on each element in the people array and store the result of each call into another array.

var mapTitles = people.map(x => {
  return addTitle(x)
})
console.log(mapTitles)