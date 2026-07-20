class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        let time = 0;
        let fleets = 0;
        const cars = position.map((p, i) => [p, speed[i]]);
        cars.sort((a, b) => b[0] - a[0]);
        for (let i = 0; i < cars.length; i++) {
            const currentTime = (target - cars[i][0]) / cars[i][1];
            if (currentTime > time) {
                fleets += 1;
                time = currentTime;
            }
        }
        return fleets;
    }
}
