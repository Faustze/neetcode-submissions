class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    // by sorting [O(n log n)]
    groupAnagrams(strs: string[]): string[][] {
        if (strs.length === 1) return [strs]

        const group = new Map<string, string[]>()

        for (const ch of strs) {
            const curr = ch.split('').sort().join('')
            const currVal: string[] | undefined = group.get(curr)
            if (currVal === undefined) {
                group.set(curr, [ch])
            } else {
                currVal.push(ch)
                group.set(curr, currVal)
            }
        }

        return Array.from(group.values())

    }


    // by charCode [O(n)]
    // groupAnagrams(strs: string[]): string[][] {
    //     if (strs.length === 1) return [strs]

    //     count[26]

    //     const group = new Map<string, string[]>()
                
    // }
}
