class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        const leftMaxArr: number[] = [height[0]];
        const rightMaxArr: number[] = [];
        rightMaxArr[height.length - 1] = height[height.length - 1];
        const areas: number[] = [];

        for (let i = 1; i < height.length; i++) {
            leftMaxArr[i] = Math.max(leftMaxArr[i - 1], height[i]);
        }

        for (let i = height.length - 2; i >= 0; i--) {
            rightMaxArr[i] = Math.max(rightMaxArr[i + 1], height[i]);
        }

        for (let i = 0; i < height.length; i++) {
            areas.push(Math.min(leftMaxArr[i], rightMaxArr[i]) - height[i]);
        }

        return areas.reduce((acc, cur) => (acc += cur));
    }
}
