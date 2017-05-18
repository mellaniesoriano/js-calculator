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

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */

   function load (x){
    total = x;
    if(typeof x === "number"){
      return total;
    } else {
      return undefined;
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
    if(typeof x === "number"){
      total += x;
    } else {
      throw error;
    }
   }

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */


  /**
   * Stores the value of `total` to `memory`
   */


  /**
   * Clear the value stored at `memory`
   */

  /**
   * Validation
   */

   return {
    load: load,
    getTotal: getTotal,
    add: add
   };

};