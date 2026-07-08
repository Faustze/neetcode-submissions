class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let leftIdx = 0 , rightIdx = numbers.length - 1;
        let sm = numbers[leftIdx] + numbers[rightIdx];
        while (sm !== target) {
            if (sm > target) {
                rightIdx -= 1
            } else {
                leftIdx += 1
            }
            sm = numbers[leftIdx] + numbers[rightIdx];
        }
        return [leftIdx + 1, rightIdx + 1]
    }
}