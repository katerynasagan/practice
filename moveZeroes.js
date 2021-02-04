var moveZeroes = function(nums) {
    // [1,0,3,12, 0] >>> nums
    //  0 1 2 3 4   >>> i

    for (var i = 0; i < nums.length; i++) { //1
        if (nums[i] === 0) { //  === 0
           nums.splice(i, 1); // [1,0,3,12]
           nums.push(0);      // // [1,0,3,12, 0]
        } else {
           nums.push(nums[i]);
        }
   }

}
