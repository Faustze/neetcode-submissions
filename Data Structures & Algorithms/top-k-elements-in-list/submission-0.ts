class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const freq = new Map<number, number>()

        for (const num of nums) {
            freq.set(num, (freq.get(num) ?? 0) + 1)
        }

        return Array.from(freq.entries())
            .sort((a, b) => b[1] - a[1]) // сортируем по частоте
            .slice(0, k)
            .map(([num]) => num)
    }
}
