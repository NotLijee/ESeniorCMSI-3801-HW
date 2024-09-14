from dataclasses import dataclass
from collections.abc import Callable


def change(amount: int) -> dict[int, int]:
    if not isinstance(amount, int):
        raise TypeError('Amount must be an integer')
    if amount < 0:
        raise ValueError('Amount cannot be negative')
    counts, remaining = {}, amount
    for denomination in (25, 10, 5, 1):
        counts[denomination], remaining = divmod(remaining, denomination)
    return counts




# Write your first then lower case function here
def first_then_lower_case(a: list[str], p: Callable):
            for string in a:
                if string == []:
                     return None
                elif p(string):
                    return string.lower()
            return None 


# Write your powers generator here

def powers_generator(base: int, limit: int):
    power = 0
    result = 1
    while result <= limit:
        yield result
        power += 1
        result = base ** power

               
          

# Write your say function here
def say(word=""):
    words = []
    
    def chainable(next_word=None):
        if next_word is None:
            return " ".join(words)
        words.append(next_word)
        return chainable
    
    if word:
        words.append(word)
        
    return chainable

# Write your line count function here


# Write your Quaternion class here
