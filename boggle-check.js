module.exports = class BoggleChecker {
    constructor(boggleMatrix) {
        this.boggleMatrix = boggleMatrix;
        this.width = boggleMatrix.length;
        this.height = boggleMatrix[0].length;
    }

    // Public method for checking if the given word is a valid guess
    checkWord(word) {
        this.word = word;
        this._initVisited();
        let result = false;

        for (let i = 0; i < this.width && !result; i++) {
            for (let j = 0; j < this.height && !result; j++) {
                if (this.boggleMatrix[i][j] === word[0]) {
                    result = this._isWordFound(i, j, '');
                }
            }
        }

        return result;
    }

    // Recursive method for looking through adjacent cells
    // and check if the given word could be found
    _isWordFound(i, j, str) {
        str += this.boggleMatrix[i][j];

        if (str === this.word) return true;
        if (str.length >= this.word.length) return false;

        // Mark current cell as visited
        this.visited[i][j] = true;

        // Check 8 adjacent cells of boggleMatrix[i][j]
        let result = false;

        for (let row = i - 1; row <= i + 1 && row < this.width && !result; row++) {
            for (let col = j - 1; col <= j + 1 && col < this.height && !result; col++) {
                if (row >= 0 && col >= 0 && !this.visited[row][col]) {
                    result = this._isWordFound(row, col, str);
                }
            }
        }

        // Mark visited of current cell as false
        this.visited[i][j] = false;

        return result;
    }

    // Method for visited boolean matrix initializing
    _initVisited() {
        this.visited = this.boggleMatrix.map(row => row.map(() => false));
    }
};
