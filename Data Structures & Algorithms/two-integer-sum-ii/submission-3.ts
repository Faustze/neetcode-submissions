class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let leftIdx = 0 , rightIdx = numbers.length - 1;
        while (leftIdx < rightIdx) {
            const sm = numbers[leftIdx] + numbers[rightIdx];
            if (sm === target) {
                return [leftIdx + 1, rightIdx + 1];
            }
            if (sm > target) {
                rightIdx--;
            } else {
                leftIdx++;
            }
        }
    }
}