class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const st = new Set<number>()
        for (const num of nums) {
            if (st.has(num)) {
                return true
            }
            st.add(num)
        }
        return false
    }
}
