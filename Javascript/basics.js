/* Equals operator (===) */
// The === operator is commonly referred to as the strict equality operator. It compares two values and evaluates to true if they are equal.

function isEqual(a, b) {
   if( a === b){
       console.log("true"); // prints true if a and b are equal
   }
}

module.exports = isEqual; //call the function
