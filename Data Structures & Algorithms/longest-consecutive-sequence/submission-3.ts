class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let maxCnt = 0, cnt = 1
        const st = new Set<number>(nums)

        for (let i = 0; i < nums.length; i++) {
            if (st.has(nums[i] - 1)) continue
            for (let j = 1; j < nums.length + 1; j++) {
            //  является ли число началом последовательности?
                if (st.has(nums[i] + j)) {
                    cnt += 1
                } else {
                    break
                }
            }
            maxCnt = cnt > maxCnt ? cnt : maxCnt
            cnt = 1
        }
        return maxCnt
    };
}
