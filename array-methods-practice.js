// Array Methods Practice

// Below are exercises in using array methods. Beneath each prompt write the code to fulfill the exercise requirement.

// Exercise 1
// Consider this variable:
var groceryList1 = ["apples", "carrots", "oatmeal"]
// Write the code that will add "granola" to the end of array without altering the original array.
var newList1 = groceryList1.concat('granola')
console.log(newList1)
console.log(groceryList1)
// Exercise 2
// Consider this variable:
var groceryList2 = ["chips", "dip", "cookies"]
// Write the code that will add "soda" to the end of the original array.
groceryList2.push('soda')
console.log(groceryList2)
// Exercise 3
// Consider this variable:
var numbers1 = [1, 2, 3, 4, 5]
// Write the code that will add the number 0 to the beginning of the array without altering the original array.
var newNumbers1 = [0].concat(numbers1)
console.log(newNumbers1)
console.log(numbers1)
// Exercise 4
// Consider this variable:
var numbers2 = [2, 4, 6, 8, 10]
// Write the code that will add the number 0 to the beginning of the original array.
numbers2.unshift(0)
console.log(numbers2)
// Exercise 5
// Consider this variable:
var numbers3 = [2, 13, 6, 8, 4, 2]
// Write the code that finds the index of the first appearance of the number 2.
firstIndex = numbers3.indexOf(2)
console.log(firstIndex)
// Exercise 6
// Write the code that finds the index of the last appearance of the number 2.
lastIndex = numbers3.lastIndexOf(2)
console.log(lastIndex)
// Exercise 7
// Consider this variable:
var chars = ["y", "a", "r", "r", "a"]
// Write the code that brings all the letters in the chars array together into a string.
var charsString = chars.join()
console.log(charsString)
// Exercise 8
// Write the code that reverses the order of the letters in the chars array and saves it into a variable called charsReversed.
var charsReversed = chars.reverse()
console.log(charsReversed)
// Exercise 9
// Write the code that brings all the letters in the charsReversed array together into a string with a hyphen between each letter.
var hyphenReversed = charsReversed.join('-')
console.log(hyphenReversed)
// Exercise 10
// Write the code that brings all the letters in the charsReversed Array together into a string without separators.
var joinedReversed = charsReversed.join('')
console.log(joinedReversed)