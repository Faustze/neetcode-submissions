class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(height: number[]): number {
        let left = 0, right = height.length - 1;
        let area = 0

        while (left < right) {
            const leftValue = height[left], rightValue = height[right]
            area = Math.max(area, Math.min(leftValue, rightValue) * (right - left))

            if (leftValue < rightValue) {
            left++
            } else {
            right--
            }
        }

        return area
        }
}
