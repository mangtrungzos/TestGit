/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // Initialise a map to store the first run of numbers
  const hashMap = new Map();

  // Loop through the numbers
  const arr = nums.length;
  for (var i = 0; i < arr; i++){
    // Determine the haspMap (reuired number) for the current number
    const sum = target - nums[i];
    
    // Check if the hsahMap exists in the map
    if(hashMap.has(sum)) {
      return [hashMap.get(sum), i];
    }

    // If not, add the current number to the map
    hashMap.set(nums[i], i)
  }
};
