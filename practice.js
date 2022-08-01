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
    var itemPrice = parseFloat(item.price.slice(1));

    _.each(products, function (product, index) {
      accumulator += parseFloat(product.price.slice(1));
    });
    return accumulator;
  });
};

// return an object consisting of dessert types and how many of each.
var dessertCategories = function(desserts) {
  var count = 0;

  return _.reduce(desserts, function(memo, dessert, index) {
    if (!memo[dessert.type]) {
      memo[dessert.type] = count;
    }
    memo[dessert.type]++;
    return memo;
  }, {});
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
var ninetiesKid = function(movies) {
  return _.reduce(movies, function(memo, movie, index) {
    if (movie.releaseYear > 1989 && movie.releaseYear < 2001) {
      memo.push(movie.title);
    }
    return memo;
  }, []);
};

// return a boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  return _.reduce(movies, function(memo, movie, index) {
    if (movie.runtime < timeLimit) { memo = true; }
    return memo;
  }, false);
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
  });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
var glutenFree = function(desserts) {
  _.map(desserts, function(dessert) {
    dessert.glutenFree = dessert.ingredients.includes('flour') ? false : true;
  });
  return desserts;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
var applyCoupon = function(groceries, coupon) {
  var percentage = coupon * 100;

  _.map(groceries, function(item) {
    var integerPrice = parseFloat(item.price.slice(1)) * 100;
    var afterCoupon = (integerPrice - (integerPrice * coupon)) / 100;
    var finalPrice = (Math.round(afterCoupon * 100) / 100);
    item.salePrice = '$' + finalPrice;
  });
  return groceries;
};
