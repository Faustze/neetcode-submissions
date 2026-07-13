class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack: string[] = [];
        const mp = new Map<string, string>([
            [')', '('],
            [']', '['],
            ['}', '{'],
        ]);
        for (const ch of s) {
            const curr = mp.get(ch)
            if (curr !== undefined) {
                if (stack.length > 0 && stack[stack.length - 1] === curr) {
                    stack.pop()
                } else {
                    return false
                }
            } else {
                stack.push(ch)
            }
        }
        return stack.length > 0 ? false : true
    }
}
