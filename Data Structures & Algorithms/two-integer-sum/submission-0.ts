class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const mp = new Map<number, number>()

        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i]

            if (mp.has(complement)) {
                return [mp.get(complement), i]
            }

            mp.set(nums[i], i)
        }
    }
}
