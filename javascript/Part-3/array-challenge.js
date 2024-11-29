// Array examples
/* 1. Write a JavaScript function to check whether an `input` is an array or not
    est Data :
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
false
true
*/

//Function to check if the input is an array

const is_array = input => {
    //using tostring method to get the class  of the input and checking if it is "[object Array]" 
    if(toString.call(input) === "[object Array]") {
        //Return true if the input is an Array
        return true;

    }
    //Return false if the input is not an array
    return false;
 }

 //Testing the function with a string

//  console.log(is_array('w3resource'))
 //Testing the function with an array

//  console.log(is_array([1,2,3,4,5]));
 

 /*Write a JavaScript function to clone an array.

Test Data:
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]] */

//Sample Solution 1

//Function to clone an array

// var array_Clone = function(arra1){
    //Using the slice method to create a shallow copy of the input array
    // return arra1.slice(0)
// };

// Testing the function with an array
// console.log(array_Clone([1,2,4,0]));

// Testing the function with an array containing nested arrays
// console.log(array_Clone([1,2,[4,0]]));

// ****************************************************Soluion 2 ES6 version *************************************************************

//Function to clone an array

// const array_Clone = arra1 => {
//     //Using the slice method to create a shallow copy of the input array 
//     return arra1.slice(0);
// };

// // Testing the function with an array
// console.log(array_Clone([1,2,4,0]))

// // Testing the function with an array containing nested arrays
// console.log([1,2,[4,0]]);

// *********************************************************Solution by Me ********************************************************************

// let array1 = [1,2,3,4,5,6,7]

// let array2 = [...array1]
// console.log(array2);

// ************************************************************ EX N0 3 ***************************************************************************


// 3. Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []


//Function to get the first n elements of an array
// **********************************************Solution 1 ************************************

var first = function(array , n ) {
    //Check if the input array is null, retrun undefined if true
    if(array == null)
        return void 0;

        // Check if the value of n is null, return the first element of the array if true
        if (n == null) 
            return array[0];

            // Check if the value of n is negative, return an empty array if true
            if(n < 0)
                return [];
        //Use the slice method to get the first n elements of the array
        return array.slice(0,n)

}
        
// Testing the function with various cases
// console.log(first([7, 9, 0, -2]));
// console.log(first([], 3));
// console.log(first([7, 9, 0, -2], 3));
// console.log(first([7, 9, 0, -2], 6));
// console.log(first([7, 9, 0, -2], -3));
