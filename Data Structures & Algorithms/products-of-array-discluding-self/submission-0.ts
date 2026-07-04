class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let leftProduct = 1,
            rightProduct = 1;
        const answer: number[] = [];

        for (let i = 0; i < nums.length; i++) {
            answer.push(leftProduct);
            leftProduct *= nums[i];
        }

        for (let i = nums.length - 1; i > -1; i--) {
            answer[i] *= rightProduct;
            rightProduct *= nums[i];
        }
        return answer;
    }
}
