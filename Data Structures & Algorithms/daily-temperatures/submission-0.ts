class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const n = temperatures.length;
        const answer: number[] = new Array(n).fill(0); // по умолчанию 0
        const stack: number[] = []; // храним ИНДЕКСЫ

        for (let i = 0; i < n; i++) {
            // Пока стек не пуст И текущая температура ВЫШЕ температуры на верхушке
            while (stack.length > 0 && temperatures[i] > temperatures[stack.at(-1)!]) {
            const topIdx = stack.pop()!;
            answer[topIdx] = i - topIdx; // расстояние между индексами
            }
            stack.push(i);
        }

        return answer;
    }
}
