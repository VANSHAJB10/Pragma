/* Equals operator (===) */
// The === operator is commonly referred to as the strict equality operator. It compares two values and evaluates to true if they are equal.

function isEqual(a, b) {
   if( a === b){
     //  console.log("true"); // print true if a and b are equal
      return true;
   }
}

module.exports = isEqual; //call the function


/* Not Equals operator (!==) */
//  !== or the strict inequality operator. This operator will evaluate to true if the two values are not equal.

/* QUESTION:- 
Given two arguments, first and last, determine which one is greater.
If first is greater than last, return first!
If last is greater than first, return last!
If they are equal, do not return anything.    */

function greater(first, last) {
    if (first > last){
        return first;
    } 
    else if(last > first){
        return last;
    }
    else{
            // NOTE: when u don't return anything, The value returned from funtion in this case is 'undefined'.
    }
}

module.exports = greater;
