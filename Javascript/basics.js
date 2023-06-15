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

/*   Difference between 'return' and 'console.log'  */
// example- bypassing the esle statement of if-else block
function isEqual(a,b) {
    if(a === b) {
        return true;
    }
    else {
        return false;
    }
}

// in the above code, else can be removed --

function isEqual(a,b) {
    if(a === b) {
        return true;
    }
    return false;
}

/* EXPLANATION -- In both cases, the return false is only reached if a is not equal to b.
If a is equal to b in the second example, the return true will exit the function and the last line will never be reached.  */

//But in example 2- 
function isEqual(a,b) {
    if(a === b) {
        console.log('They are equal!');
    }
    else {
        console.log('They are not equal!');
    }
}

// Removing the else here would not work! 

function isEqual(a,b) {
    if(a === b) {
        console.log('They are equal!');
    }
    // this line will always be reached
    console.log('They are not equal!');
}

/*  In this case, the last line will always be reached. EXPLANATION -- in the example 2- the printing is being done. whereas in example 1 ... 
    we have used return statement, which will exit the function after it is iterated but print statement will come out of conditional statement each time to
    continue its execution in the function */
