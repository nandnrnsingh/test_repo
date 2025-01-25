/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) 
{
    let n = nums.length;
    let pre = [];         // let pre = new Array(n).fill(1);
    let suf = [];
    pre[0] = 1;
    for(let i = 1; i < nums.length; i++)
    {
        pre[i] = pre[i-1] * nums[i-1];
    }
    
    suf[n-1] = 1;
    for(let i = nums.length-2;i>=0; i--)
    {
        suf[i] = suf[i+1] * nums[i+1];
    }

    let ans = [];
    for(let i=0; i<nums.length;i++)
    {
        ans[i] = pre[i]*suf[i];
    }

    return ans;
};