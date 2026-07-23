class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let left = 0, right = nums.length - 1;
        let middle = Math.floor((left + right) / 2);

        while (right >= left) {
            if (target > nums[middle]) {
                left = middle + 1;
            } else if (target < nums[middle]) {
                right = middle - 1;
            } else {
                return middle;
            }
            middle = Math.floor((left + right) / 2);
        }

        return -1;
    }
}
