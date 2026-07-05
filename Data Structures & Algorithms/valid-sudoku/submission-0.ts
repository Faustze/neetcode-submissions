class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rowSet = new Set<string>()
        const colSets: Set<string>[] = Array.from({ length: 9 }, () => new Set<string>())
        const squareSets: Set<string>[] = Array.from({ length: 9 }, () => new Set<string>())

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === '.') continue
                // column
                if (colSets[j].has(board[i][j])) return false
                colSets[j].add(board[i][j])     
                // row
                if (rowSet.has(board[i][j])) return false
                rowSet.add(board[i][j])
                // square
                const squareIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)
                if (squareSets[squareIndex].has(board[i][j])) return false
                squareSets[squareIndex].add(board[i][j])
            }
            rowSet.clear()
        }
        return true
    }
}
