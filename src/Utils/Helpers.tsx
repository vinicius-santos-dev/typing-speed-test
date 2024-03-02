export function countCorrectWords(actual: string, expected: string) {
  const actualWords = actual.split(" ");
  const expectedWords = expected.split(" ");

  return expectedWords.reduce(
    (correctWords: number, expectedWord: string, i: number) => {
      const actualWord = actualWords[i];
      if (actualWord === expectedWord) {
        correctWords++;
      }
      return correctWords;
    },
    0
  );
}

export function countWrongWords(actual: string, expected: string) {
  const actualWords = actual.split(" ");
  const expectedWords = expected.split(" ");

  return expectedWords.reduce(
    (wrongWords: number, expectedWord: string, i: number) => {
      const actualWord = actualWords[i];
      if (actualWord !== expectedWord) {
        wrongWords++;
      }
      return wrongWords;
    },
    0
  );
}

export function calulateAccuracyPercentage(wrongWords: number, total: number) {
  if (total > 0) {
    const corrects = total - wrongWords;
    return Math.floor((corrects / total) * 100);
  }

  return 0;
}

// export function countErrors(actual: string, expected: string) {
//   const expectedChars = expected.split("");

//   return expectedChars.reduce(
//     (errors: number, expectedChar: string, i: number) => {
//       const actualChar = actual[i];
//       if (actualChar !== expectedChar) {
//         errors++;
//       }
//       return errors;
//     },
//     0
//   );
// }
