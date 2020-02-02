import BoggleChecker from "./boggle-check";

const boggleChecker: BoggleChecker = new BoggleChecker(
    [
        [ 'I', 'L', 'A', 'W'],
        [ 'B', 'N', 'G', 'E'],
        [ 'I', 'U', 'A', 'O'],
        [ 'A', 'S', 'R', 'L'],

    ]);

console.log('BINGO', boggleChecker.checkWord('BINGO'));
console.log('LINGO', boggleChecker.checkWord('LINGO'));
console.log('ILNBIA', boggleChecker.checkWord('ILNBIA'));
console.log('BUNGIE', boggleChecker.checkWord('BUNGIE'));
console.log('BINS', boggleChecker.checkWord('BINS'));
console.log('SINUS', boggleChecker.checkWord('SINUS'));