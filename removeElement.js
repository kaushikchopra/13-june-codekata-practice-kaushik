let removeElement = function(nums, val) {
    let j = 0;
    for(const element of nums)
    {
        if(element!=val)
        {
            nums[j++] = element;
        }
    }
    return j;
};


let nums = [3,2,2,3];
let val = 3;

console.log(removeElement(nums, val));