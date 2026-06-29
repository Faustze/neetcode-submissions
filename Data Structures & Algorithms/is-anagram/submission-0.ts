class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false

        const mp: Map<string, number> = new Map();

        for (const ch of s) {
            mp.set(ch, (mp.get(ch) || 0) + 1)
        }

        for (const ch of t) {
            const curr = mp.get(ch)
            if (!curr) return false
            if (curr === 1) mp.delete(ch)
            else mp.set(ch, curr - 1)
        }

        return true
    }
}
