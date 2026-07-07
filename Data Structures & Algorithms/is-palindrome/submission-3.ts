class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        if (s.length === 1) return true
        const cleaned_s = s.toLowerCase().replace(/[^a-z0-9]/g, '')
        let left = 0, right = cleaned_s.length - 1;
        while (left < right) {
            if (cleaned_s[left] !== cleaned_s[right]) return false
            left++
            right--
        }

        return true
    }
}
