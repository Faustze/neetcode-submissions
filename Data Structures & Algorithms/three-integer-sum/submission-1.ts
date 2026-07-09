class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const triplets: number[][] = [];
        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length; i++) {
            let leftIdx = i + 1,
                rightIdx = nums.length - 1;
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            while (leftIdx < rightIdx) {
                const sm = nums[i] + nums[leftIdx] + nums[rightIdx];

                if (sm === 0) {
                    triplets.push([nums[i], nums[leftIdx], nums[rightIdx]]);

                    leftIdx++;
                    rightIdx--;

                    // пропускаем одинаковые left значения
                    while (leftIdx < rightIdx && nums[leftIdx] === nums[leftIdx - 1]) {
                        leftIdx++;
                    }

                    // пропускаем одинаковые right значения
                    while (leftIdx < rightIdx && nums[rightIdx] === nums[rightIdx + 1]) {
                        rightIdx--;
                    }
                } else if (sm > 0) {
                    rightIdx--;
                } else {
                    leftIdx++;
                }
            }
        }

        return triplets;
    }
}
