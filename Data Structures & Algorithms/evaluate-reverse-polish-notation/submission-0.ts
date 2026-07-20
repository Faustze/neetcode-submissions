const ops: Record<string, (a: number, b: number) => number> = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => Math.trunc(a / b),
};
class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */

    evalRPN(tokens: string[]): number {
        const stack: number[] = [];

        for (const token of tokens) {
            if (token in ops) {
                const right = stack.pop()!;
                const left = stack.pop()!;
                stack.push(ops[token](left, right));
            } else {
                stack.push(Number(token));
            }
        }

        return stack[0];
    }
}
