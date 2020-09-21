//1:
//Write a function compareToTen that takes a number, num as an argument and returns a Promise that tests if the value of num is less than or greater than the value 10.
let compareToTen = (num) => {
  return new Promise((resolve, reject) => {

    // if number is greater or equal it should resolve  with a string and log for example, if num = 20 it should say '20 is greater than or equal to 10, resolved!'
    let baseNumber = 10
    if (num >= baseNumber) {
      resolve(`${num} is greater than or equal to 10`)
    }

    // if num is less than 10 then it should reject and log for example '5 is less than 10, error!'
    else {
      reject(`${num} is less than 10, error!`)
    }

    // create a variable randomNum that creates a random number between 1 and 20
    // use it as your argument to invoke your compareToTen function
    const randomNum = Math.floor((Math.random() * 20) + 1)

  })
}

//2.
// create a global variable called order. It will hold a string with whatever drink you want to order, for example, a 'Slurpy'
const order = 'slurpy'
//create a promise called drink
let drink = new Promise((resolve, reject) => {

  // inside your promise:
  // first log 'I'll be right back with your <order variable>'.
  console.log(`I'll be right back with your ${order}`);

  // next create another boolean variable, orderCannotBeFilled. Set it to false
  const orderCannotBeFilled = false;

  // when order is orderCannotBeFilled is true, promise should reject after 2 seconds with a message,
  // 'Sorry we are all out of <whatever the order is>' (not hard coded order)
  if (orderCannotBeFilled) {
    setTimeout(() => {
      reject(`Sorry we are all out of ${order}`);
    }, 2000);
  }
  // otherwise resolve the order after 4 seconds saying 'Server returns: 'Here is your <whatever the order is>'
  else {
    setTimeout(() => {
      resolve(`Server returns: 'Here is your ${order}'`)
    }, 4000)
  }

})

// Now consume the promise
drink.then((orderInfo) => {

  // When the order resolves, it should log 'Server Returns:' and the resolve message.
  console.log(orderInfo)
})
// Handle the catch. It should log 'Sorry we are all out of <whatever the order is>'
.catch((err) => {
  // catches any error either from reject OR from error in .then
  console.log(`${err}`);
});

// Test by changing the value of orderCannotBeFilled between true and false




// SAMPLE OUTPUT:
// resolve out put should be
// Server says: "I'll be right back with your Slurpy"
// Server returns: "Here is your Slurpy".

// OR
// reject output in terminal should be
// Server says: "I'll be right back with your Slurpy"
// Sever returns: "Sorry, We are all out of Slurpy"
//================================================================================================================================================================================================================//
//================================================================================================================================================================================================================//

//3.CHAIN
//Write two separate functions that return promises
// The first function, makeAllCaps(), will take in an array of words and capitalize them.


const makeAllCaps = (arrayOfWords)=>{
  arrayOfWords.forEach(word => console.log(word.toUpperCase()))
}


//the second function, sortWords(), will sort the words in alphabetical order.
//If the array contains anything but strings, it should throw an error.
// Test the functions separately
// Then test what happens if you chain the 2 functions on a successful array

const arrayOfWords = ['cucumber', 'tomatos', 'avocado']; //returns ['CUCUMBER','TOMATOES','AVOCADO']
const complicatedArray = ['cucumber', 44, true]; //returns "Error Not All Items are strings"

//4.
// a. Create a variable, totalSales that creates a promise.
// b. Within the promise create a reject handler for errors and a resolve handler that resolves a copy of the array that is inside the json object.
// c. Call or rather consume your totalSales promise
// d. Use your thenable to log the data for all the companies in the Legal industry
// e. pass the data for all the companies in the Legal industry to the next thenable
// f. Chain again and find all the names of the people in the legal industry and log those names in a string: "Contacts from the legal profession:" + list all of the names
// g. In that same thenable return 30% of each of the sales and pass the value to the next thenable
// h. Add all of the sales totals together and return a string saying: "Total sales for everyone from the Legal profession after taxes is $30000" if the value of the added sales is 30000
const json = {
  data: [
    {
      name: 'NextGen Advisors',
      industry: 'Professional Services',
      contact: 'John Rutton',
      sales: 135000,
    },
    {
      name: 'Receivers Inc',
      industry: 'Legal',
      contact: 'Stacey Martin',
      sales: 201000,
    },
    {
      name: 'Ethan Allen',
      industry: 'Textile',
      contact: 'Mark Shamburger',
      sales: 735000,
    },
    {
      name: 'Russian River Utility',
      industry: 'Transportaion&Shipping',
      contact: 'Phil Butterworth',
      sales: 605000,
    },
    {
      name: 'Wayne Johnson Law Office',
      industry: 'Legal',
      contact: 'Beverly Stephens',
      sales: 135000,
    },
    {
      name: 'Kravet',
      industry: 'Textile',
      contact: 'Jan Farnsworth',
      sales: 105000,
    },
    {
      name: 'Wacomb Data',
      industry: 'Professional Services',
      contact: 'Larry Peters',
      sales: 13000,
    },
    {
      name: 'Farnsworth Utility',
      industry: 'Transportaion&Shipping',
      contact: 'John Rutton',
      sales: 437000,
    },
    {
      name: 'Barnes Law',
      industry: 'Legal',
      contact: 'John Percy',
      sales: 35000,
    },
  ],
};

// 5. Based on given athlets array
//a.  Write a function called playerFunction that returns a promise which copies the array into a new array called 'playerArr'.
// const playerFunction = (array)=>{
//   return new Promise((resolve, reject)=> {
//     console.log(array)
//   })
// }
// console.log(playerFunction(athletes))
// Make sure your function is re-useable so no hard coded values.
//b. Now invoke the function
// loop through the function using array method and Place a key value pair into each object based on the player's position.
//If the position is guard then add sport:'basketball'
// If the position is quarterback add sport:'football'
// Use a ternary to solve this.
// Note: There can only be two sports either football or basketball and only two positions guard and quarterback
//c.
// Log (console.log) the whole array with the sport added for each object. Preface the list with a 'Sport added: ' string.
// console.log('---------') to separate a section.
//d.
// In your next thenable, Console.log a string like the example below for each player:
// 'Tom Bradshaw plays football and is a quarterback for the Pittsburgh Steelers'
// Only choose the players who play football and use deconstruction and the ternary operator to complete this piece
//e. In the next thenable, console.log the original array to show it has not been mutated
//f. Be sure to include you Promise Error Handling using the catch
let athletes = [
  {
    name: 'Tom Brady',
    position: 'quarterback',
    team: 'New England',
  },
  {
    name: 'Drew Brees',
    position: 'quarterback',
    team: 'New Orleans',
  },
  {
    name: 'Michael Jordan',
    position: 'guard',
    team: 'Chicago Bulls',
  },
  {
    name: 'Stephen Curry',
    position: 'guard',
    team: 'Golden Warriors',
  },
  {
    name: 'Russell Wilson',
    position: 'quarterback',
    team: 'Seattle Seahawks',
  },
  { name: 'Chris Paul', position: 'guard', team: 'Oklahoma City Thunder' },
  { name: "D'Angelo Russell", position: 'guard', team: 'Golden Warriors' },
  {
    name: 'Eli Manning',
    position: 'quarterback',
    team: 'NY Giants',
  },
];
