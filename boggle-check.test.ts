import BoggleChecker from './boggle-check';
import mockData from './boggle.mock';


describe('FEATURE: Testing functionality for BoggleChecker', () => {
    describe('FEATURE: BoggleChecker initializing', () => {
        it(`WHEN: BoggleChecker instance is created
            THEN: boggleMatrix, width and height properties should be set`, () => {
            const boggleChecker = new BoggleChecker(mockData.smallMatrixMock.boggle);

            expect(boggleChecker.boggleMatrix).toEqual(mockData.smallMatrixMock.boggle);
            expect(boggleChecker.width).toEqual(mockData.smallMatrixMock.boggle.length);
            expect(boggleChecker.height).toEqual(mockData.smallMatrixMock.boggle[0].length);
        });
    });

    describe('FEATURE: BoggleChecker 4x4 matrix', () => {
        const boggleChecker = new BoggleChecker(mockData.smallMatrixMock.boggle);
        describe('WHEN: calling checkWord method for valid guesses', () => {
            mockData.smallMatrixMock.validGuesses.forEach((word: string) => {
                it(`THEN: should return true for ${word}`, () => {
                    expect(boggleChecker.checkWord(word)).toBeTruthy;
                });
            });
        });

        describe('WHEN: calling checkWord method for invalid guesses', () => {
            mockData.smallMatrixMock.invalidGuesses.forEach((word: string) => {
                it(`THEN: should return false for ${word}`, () => {
                    expect(boggleChecker.checkWord(word)).toBeFalsy;
                });
            });
        });
    });

    describe('FEATURE: BoggleChecker 10x5 matrix', () => {
        const boggleChecker = new BoggleChecker(mockData.bigMatrixMock.boggle);
        describe('WHEN: calling checkWord method for valid guesses', () => {
            mockData.bigMatrixMock.validGuesses.forEach((word: string) => {
                it(`THEN: should return true for ${word}`, () => {
                    expect(boggleChecker.checkWord(word)).toBeTruthy;
                });
            });
        });

        describe('WHEN: calling checkWord method for invalid guesses', () => {
            mockData.bigMatrixMock.invalidGuesses.forEach((word: string) => {
                it(`THEN: should return false for ${word}`, () => {
                    expect(boggleChecker.checkWord(word)).toBeFalsy;
                });
            });
        });
    });
});