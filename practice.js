// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var count = 0;

  _.each(numbers, function(num, index) {
    if (num % 5 === 0) {
      count++;
    }
  });
  return count;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  return _.filter(fruits, function(fruit) {
    return fruit === targetFruit;
  });
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  return _.filter(fruits, function(fruit) {
    return fruit[0] === letter;
  });
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  return _.filter(desserts, function(dessert) {
    return dessert.type === 'cookie';
  });
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  return _.reduce(products, function(memo, item, index) {
    var accumulator = 0;
    var itemPrice = parseFloat(item.price.slice(1,));

    _.each(products, function (product, index) {
      accumulator += parseFloat(product.price.slice(1,));
    })
    return accumulator;
  });
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }

// I - Desserts array of objects
// O - Object with type counts
// C - No for loops
// E -

var dessertCategories = function(desserts) {
  // pseudocode
  // create an object
  // for each dessert type in array/obj, create a key in the result object
  // for each dessert in the object array
  // get type of dessert
  // if the key doesn't already exist, add it to result obj
  // increment the corresponding key in the result obj
  // return object with dessert type counts and how many of each
};


// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {

};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {

};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  _.map(fruits, function(fruit) {
    return fruit[0].toUpperCase();
  })
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  _.map(desserts, function(dessert) {
    dessert.glutenFree = dessert.ingredients.includes('flour') ? false : true;
  })
  return desserts;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
var applyCoupon = function(groceries, coupon) {
  var percentage = coupon * 100;

  _.map(groceries, function(item) {
    var integerPrice = parseFloat(item.price.slice(1,)) * 100;
    var afterCoupon = (integerPrice - (integerPrice * coupon)) / 100;
    var finalPrice = Math.round(afterCoupon * 100)/100;
    item.salePrice = '$' + finalPrice;
  });
  return groceries;
};
