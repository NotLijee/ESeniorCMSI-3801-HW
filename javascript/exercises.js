import exp from "node:constants"
import { open } from "node:fs/promises"

export function change(amount) {
  if (!Number.isInteger(amount)) {
    throw new TypeError("Amount must be an integer")
  }
  if (amount < 0) {
    throw new RangeError("Amount cannot be negative")
  }
  let [counts, remaining] = [{}, amount]
  for (const denomination of [25, 10, 5, 1]) {
    counts[denomination] = Math.floor(remaining / denomination)
    remaining %= denomination
  }
  return counts
}

// Write your first then lower case function here
function firstThenLowerCase(arr, predicate) {
  return arr.find(predicate)?.toLowerCase();
}
export { firstThenLowerCase }

// Write your powers generator here

function* powersGenerator({ ofBase, upTo }) {
  let power = 1;
  if (upTo <= power) {
      return;
  }
  while (power < upTo) {
      yield power;
      power *= ofBase;
  }
}
export { powersGenerator }



// Write your say function here

function say(word) {
  const words = [];

  function addWord(newWord) {
      if (newWord === undefined) {
          return words.join(' ');
      }
      words.push(newWord);
      return addWord;
  }

  if (word !== undefined) {
      words.push(word);
  }

  return addWord;

}

export { say }


// Write your line count function here

// Write your Quaternion class here
