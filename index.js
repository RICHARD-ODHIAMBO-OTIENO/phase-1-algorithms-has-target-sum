//We are creating a magic trick named "hasPairWithSum" that needs a list of numbers (we call this list "array") and a special number ("target").
    
function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === target) {
            return true; // Pair found that adds up to the target
        }
    }
}
return false; // No pair found that adds up to the target
}

  

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/
//unction hasTargetSum takes array, target:
// for each element i in array from 0 to length of array:
// for each element j in array from i+1 to length of array:
//if the sum of array[i] and array[j] equals target:
//return true // We found a pair that sums to the target
// return false // No pair was found that sums to the target


/*
  Add written explanation of your solution here
*/

// The function hasTargetSum is designed to find if there are any two distinct numbers within an array that add up to a specified target number. Here’s how the function operates:
// Loop through each element in the array using the variable i. This is the first number of the potential pair.
// Start another loop from the next element using the variable j. This checks the sum of the current element from the outer loop with each subsequent element in the array.
// Check if the sum of the two elements (array[i] and array[j]) equals the target. If it does, return true immediately because you've found a pair that adds up to the target.
// If no such pair is found after checking all possible pairs, return false.

if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
