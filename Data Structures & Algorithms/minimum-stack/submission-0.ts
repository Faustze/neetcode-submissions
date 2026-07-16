class MinStack {
    private stack: number[] = [];
    private minStack: number[] = [];

    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val);
        const currentMin = this.minStack.length === 0 ? Infinity : this.minStack.at(-1)!;
        this.minStack.push(Math.min(val, currentMin));
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack.at(-1)
    }
}