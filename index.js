var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal= 'cat'
  return animal
}

function add2(n) {
    // Feel free to move things around!
  const two = 2
  return n + two
<<<<<<< HEAD
=======


>>>>>>> 92087f450e023061e16d659f56a022d21bbda449
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var notTheFunk = funkyFunction()
var theFunk = notTheFunk()