import wordList from '../Wordle-List/Word';


export function NewWordle() {
  return wordList[Math.floor(Math.random() * wordList.length)];
}

export function alphabetCreate() {
  const alphabetObj = [];
  for (let i = 65; i <= 90; i++) {
    const letter = String.fromCharCode(i);
    alphabetObj.push(letter);
  }
  console.log(alphabetObj);
  return alphabetObj;
}
export function newGame(setGuesses, setWrongGuesses, setShowPopup, setFlagValue) {
  setGuesses([]);
  setWrongGuesses([]);
  setShowPopup("");
  setFlagValue(prev => !prev); // re-trigger useEffect
}
