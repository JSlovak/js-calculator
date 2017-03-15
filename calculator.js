/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

var calculatorModule = (function(){
  //Private
  var _memory = 0;
  var _total = 0;
  var calculator = {};
// Public



   /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */

   calculator.load = function(x){
    if (typeof x !== "number"){
      throw new Error ("Numbers only. Try again, Felcia.");
    }
    _total = x;
    return _total;
      // }
  };

  /**
   * Return the value of `total`
   * @return { Number }
   */

   calculator.getTotal = function(){
    return _total;
   };

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */

   calculator.add = function(x){
    if (typeof x !== "number"){
      throw new Error ("Numbers only. Try again, Felcia.");
    }
    _total += x;
    return _total;
  };

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */

  calculator.subtract = function(x){
    if (typeof x !== "number"){
      throw new Error ("Numbers only. Try again, Felcia.");
    }
    _total -= x;
    return _total;
  };

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */

   calculator.multiply = function(x){
    if (typeof x !== "number"){
      throw new Error ("Numbers only. Try again, Felcia.");
    }
    _total *= x;
    return _total;
   };

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */

   calculator.divide = function(x){
    if (typeof x !== "number"){
      throw new Error ("Numbers only. Try again, Felcia.");
    }
    _total /= x;
    return _total;
   };


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */

   calculator.recallMemory = function(){
    return _memory;

   };
  /**
   * Stores the value of `total` to `memory`
   */

   calculator.saveMemory = function(){
    _memory = _total;
    return _memory;
   };

  /**
   * Clear the value stored at `memory`
   */

   calculator.clearMemory = function(){
    _memory = 0;
    return _memory;
   }

  /**
   * Validation
   */



return calculator;

});

console.log(calculatorModule());