class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false

        const count = new Map<string, number>()

        for (const ch of s) {
            count.set(ch, (count.get(ch) || 0) + 1)
        }

        for (const ch of t) {
            const currVal = count.get(ch)
            if (currVal === undefined) return false
            if (currVal === 1) count.delete(ch)
            else count.set(ch, currVal - 1)
        }

        return count.size === 0
    }
}
