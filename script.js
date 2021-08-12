function double(arr) {
  return arr.map(function(val) {
    return val * 2;
  });
}

/* Write an ES2015 Version */

const mapFunc = arr => (arr.map(num => num * 2))


// Refactor the below function to use arrow functions:

function squareAndFindEvens(numbers){
  var squares = numbers.map(function(num){
    return num ** 2;
  });
  var evens = squares.filter(function(square){
    return square % 2 === 0;
  });
  return evens;
}

// refactored Version
const squaredAndFindEvensRefac = numbers => {
    const squares = numbers.map(num => (num ** 2))
    const evens = squares.filter(num => (num % 2 === 0))
    
    return evens
}
