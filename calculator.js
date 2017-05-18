/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

function calculatorModule() {

  var total = 0;
  var memory = 0;

    function validate(x){
    if(typeof x === "number"){
      return true;
    }
  } //FIGURE OUT HOW TO USE THIS INSTEAD OF REPEATING IF STATEMENTS

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */

   function load (x){
    total = x;
    if(validate(x)){
      return total;
    } else {
      throw error;
    }
   }

  /**
   * Return the value of `total`
   * @return { Number }
   */

   function getTotal(){
    return total;
   }

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */

   function add(x) {
    if(validate(x)){
      total += x;
    } else {
      throw error;
    }
   }

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */

   function subtract(x){
    if(validate(x)){
      total -= x;
    } else {
      throw error;
    }
   }

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */

   function multiply(x){
    if(validate(x)){
      total *= x;
    } else {
      throw error;
    }
   }


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */

   function divide(x){
    if(validate(x)){
      total /= x;
    } else {
      throw error;
    }
   }


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */

   function recallMemory(){
    return memory;
   }


  /**
   * Stores the value of `total` to `memory`
   */

   function saveMemory(){
    memory = total;
   }


  /**
   * Clear the value stored at `memory`
   */

   function clearMemory(){
    memory = 0;
   }

  /**
   * Validation
   */

   return {
    load: load,
    getTotal: getTotal,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    recallMemory: recallMemory,
    saveMemory: saveMemory,
    clearMemory: clearMemory
   };

};