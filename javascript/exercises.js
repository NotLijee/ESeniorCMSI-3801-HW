// Change Function
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

// First then LowerCase 
export function firstThenLowerCase(word, predicate) {
  return word.find(predicate)?.toLowerCase();
}

// Powers Generator
export function* powersGenerator({ofBase, upTo}) {
  let power = 0
  let value = ofBase ** power
  while (value <= upTo) {
    yield value
    power += 1
    value = ofBase ** power
  }
}


// Write your say function here
export function say(word) {
  if (word === undefined){
    return ''
  }
  let sentence = word;
  function chain(nextWord) {
     
      if (nextWord !== undefined) {
          sentence += (nextWord === "" ? " " : " " + nextWord);
          return chain; // Allow chaining
      }
      return sentence
  }
  return chain;
}


// Line Count
export async function meaningfulLineCount(filename) {
  let count = 0
  const file = await open(filename, "r")
  for await (const line of file.readLines()) {
    // Note that readLines will autoclose the file, yay
    const trimmed = line.trim()
    if (trimmed && !trimmed.startsWith("#")) {
      count++
    }
  }
  return count
}


// Quaternion Class
export class Quaternion {
  constructor(a,b, c,d) {
    
    Object.assign(this, {a,b,c,d })
    
    Object.freeze(this)
  }

  plus(v) {
    return new Quaternion(this.a + v.a, this.b + v.b, this.c + v.c, this.d + v.d)
  }
  times(v) {
    //equation from stack overflow https://stackoverflow.com/questions/19956555/how-to-multiply-two-quaternions
    const product =[
    this.a * v.a - this.b * v.b - this.c * v.c - this.d * v.d,  
    this.a * v.b + this.b * v.a + this.c * v.d - this.d * v.c,  
    this.a * v.c - this.b * v.d + this.c * v.a + this.d * v.b,  
    this.a * v.d + this.b * v.c - this.c * v.b + this.d * v.a   

    ]
    return new Quaternion(product[0],product[1],product[2],product[3])
  }
  equals(v) {
    return this.a === v.a && this.b === v.b && this.c === v.c && this.d === v.d
  }
  get conjugate() {
    return new Quaternion(this.a, -this.b, -this.c, -this.d)
  }
  get coefficients() {
    
    return [this.a,this.b,this.c,this.d]
  }

  toString() {
  let result = '';
  const symbols = ['', 'i', 'j', 'k']; 
  const components = [this.a, this.b, this.c, this.d];
  
  // Iterate through each component
  components.forEach((value, idx) => {
    if (value !== 0) {
     
            if (value > 0 && result) {
        result += '+';
      } else if (value < 0) {
        result += '-';
      }

      const absValue = Math.abs(value);
      if (absValue !== 1 || idx === 0) {
        result += absValue;
      }

      result += symbols[idx];
    }
  });
  return result || '0'; 
}
}
