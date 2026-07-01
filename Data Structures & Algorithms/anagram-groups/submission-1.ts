class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    // by sorting [O(n log n)]
    // groupAnagrams(strs: string[]): string[][] {
    //     if (strs.length === 1) return [strs]

    //     const group = new Map<string, string[]>()

    //     for (const ch of strs) {
    //         const curr = ch.split('').sort().join('')
    //         const currVal: string[] | undefined = group.get(curr)
    //         if (currVal === undefined) {
    //             group.set(curr, [ch])
    //         } else {
    //             currVal.push(ch)
    //             group.set(curr, currVal)
    //         }
    //     }

    //     return Array.from(group.values())

    // }


    // by charCode [O(n)]
    groupAnagrams(strs: string[]): string[][] {
        if (strs.length === 1) return [strs]
        
        const mp = new Map<string, string[]>()

        for (const ch of strs) {
            const count = new Array(26).fill(0)
            for (const c of ch) {
                count[c.charCodeAt(0) - 97]++
            }
            const countStr = count.join('#')
            const currVal = mp.get(countStr)
            if (currVal === undefined) {
                mp.set(countStr, [ch])
            } else {
                currVal.push(ch)
                mp.set(countStr, currVal)
            }
        }

        return Array.from(mp.values())
    }
}
