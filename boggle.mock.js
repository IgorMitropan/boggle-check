const smallMatrixMock = {
    boggle: [
        [ 'I', 'L', 'A', 'W'],
        [ 'B', 'N', 'G', 'E'],
        [ 'I', 'U', 'A', 'O'],
        [ 'A', 'S', 'R', 'L'],
    ],
    validGuesses: [
        'BINGO',
        'LINGO',
        'ILNBIA'
    ],
    invalidGuesses: [
        'BUNGIE',
        'BINS',
        'SINUS',
    ]
};

const bigMatrixMock = {
    boggle: [
        [ 'I', 'L', 'A', 'W', 'H', 'B', 'A', 'W', 'A', 'J'],
        [ 'B', 'N', 'G', 'E', 'R', 'T', 'A', 'G', 'F', 'K'],
        [ 'I', 'U', 'A', 'O', 'O', 'L', 'Q', 'Z', 'A', 'B'],
        [ 'A', 'S', 'R', 'L', 'C', 'K', 'T', 'R', 'M', 'A'],
        [ 'S', 'R', 'R', 'L', 'M', 'O', 'S', 'G', 'O', 'T'],
    ],
    validGuesses: [
        'BINGO',
        'BAZQTS',
        'ORTAGZAMOGSOM'
    ],
    invalidGuesses: [
        'BUNGIE',
        'BINS',
        'SINUS',
    ]
};

module.exports = {
    smallMatrixMock,
    bigMatrixMock
};
