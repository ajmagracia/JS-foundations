// Callbacks Practice

// Consider this variable:
var sites = ["codepen.io", "codecademy.com", "coursera.org", "egghead.io", "udemy.com", "pluralsight.com", "udacity.com", "sitepoint.com"]

// ----------------------------------------- First, lets start with some normal functions

// Exercise 1
// Declare a named function called dotCom that takes in one string as an argument and determines if that string contains ".com" (Should return either true or false). Test the function by looping over the sites array, and call your dotCom function on each item.
console.log('Exercise 1')

function dotCom(string) {
  var includeCom = string.includes('.com')
  console.log(includeCom)
  return includeCom
}
for (i = 0; i < sites.length; i++) {
  dotCom(sites[i])
}
// Exercise 2
// Declare a named function called dotIo that takes in one string as an argument and determines if that string contains ".io". Test the function by looping over the sites array, and call your dotCom function on each item.
console.log('Exercise 2')

function dotIo(string) {
  var includeIo = string.includes('.io')
  console.log(includeIo)
  return includeIo
}
for (i = 0; i < sites.length; i++) {
  dotIo(sites[i])
}
// Exercise 3
// Write a function called dotOrg that determines if a string contains .org. Notice how similar it is to Exercise 1 & 2? Not very DRY, but that's ok for now.
console.log('Exercise 3')

function dotOrg(string) {
  var includeOrg = string.includes('.org')
  console.log(includeOrg)
  return includeOrg
}
for (i = 0; i < sites.length; i++) {
  dotOrg(sites[i])
}
// Exercise 4
// Time to refactor. Create a HIGHER ORDER FUNCTION called loopOver that takes in two arguments, an array and a function. Your function should loop over each item in the array and call the function on each item.
console.log('Exercise 4')

function loopOver(array, funct) {
  for (i = 0; i < array.length; i++) {
    funct(array[i])
  }
}
// Exercise 5
// Call your loopOver function to find all ".com" websites in the sites array.
console.log('Exercise 5')
loopOver(sites, dotCom)
// Exercise 6
// Call your loopOver function to find all ".io" websites in the sites array.
console.log('Exercise 6')
loopOver(sites, dotIo)
// Exercise 9
// Call your loopOver function to find all ".org" websites in the sites array.
console.log('Exercise 7')
loopOver(sites, dotOrg)
// Exercise 10
// Now, instead of your home made loopOver function, use an array method that takes your dotCom function as a callback and returns the ".com" sites from the array.
console.log('Exercise 8')
sites.forEach(dotCom)