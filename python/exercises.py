from dataclasses import dataclass
from collections.abc import Callable


#Change function
def change(amount: int) -> dict[int, int]:
    if not isinstance(amount, int):
        raise TypeError('Amount must be an integer')
    if amount < 0:
        raise ValueError('Amount cannot be negative')
    counts, remaining = {}, amount
    for denomination in (25, 10, 5, 1):
        counts[denomination], remaining = divmod(remaining, denomination)
    return counts


# First then lower case
def first_then_lower_case( word: list[str], predicate: Callable, /) -> str:
    for string in word:
        if predicate(string):
            return string.lower()
        

# Powers Generator
def powers_generator(*,base: int, limit: int):
    power = 0
    result = 1
    while result <= limit:
        yield result
        power += 1
        result = base ** power


# Say Function
def say(word=None, /):
    if word == None:
        return ""
    def chain(next_word=None):
        if next_word == None:
            return word
        return say(f"{word} {next_word}")
    return chain

# Line count
def meaningful_line_count(filename, /):
    try:
        with open(filename, 'r') as file:
            count = 0
            for line in file:
                stripped_line = line.strip() 
                if stripped_line and not stripped_line.startswith('#'):
                    count += 1
            return count
    except FileNotFoundError as e:
        raise FileNotFoundError("No such file") from e

# Quaternion Class
@dataclass(frozen=True)
class Quaternion:
    a: float
    b: float
    c: float
    d: float
    
    def __add__(self, other):
        if isinstance(other, Quaternion):
            return Quaternion(self.a + other.a, self.b + other.b, self.c + other.c, self.d + other.d)
        return NotImplemented
    
    def __mul__(self, other):
        if isinstance(other, Quaternion):
            a = self.a * other.a - self.b * other.b - self.c * other.c - self.d * other.d
            b = self.a * other.b + self.b * other.a + self.c * other.d - self.d * other.c
            c = self.a * other.c - self.b * other.d + self.c * other.a + self.d * other.b
            d = self.a * other.d + self.b * other.c - self.c * other.b + self.d * other.a
            return Quaternion(a, b, c, d)
        return NotImplemented
    
    def __eq__(self, other):
        if isinstance(other, Quaternion):
            return (self.a, self.b, self.c, self.d) == (other.a, other.b, other.c, other.d)
        return False
    
    @property
    def conjugate(self):
        return Quaternion(self.a, -self.b, -self.c, -self.d)
    
    @property
    def coefficients(self):
        return (self.a, self.b, self.c, self.d)
    
    def __str__(self):
        components = []
        
        if self.a != 0 or (self.a == 0 and self.b == 0 and self.c == 0 and self.d == 0):
            components.append(f"{self.a}")
        
        if self.b != 0:
            components.append(f"{'+' if self.b > 0 and components else ''}{'-' if self.b < 0 else ''}{'' if abs(self.b) == 1 else abs(self.b)}i")
        
        if self.c != 0:
            components.append(f"{'+' if self.c > 0 and components else ''}{'-' if self.c < 0 else ''}{'' if abs(self.c) == 1 else abs(self.c)}j")
        
        if self.d != 0:
            components.append(f"{'+' if self.d > 0 and components else ''}{'-' if self.d < 0 else ''}{'' if abs(self.d) == 1 else abs(self.d)}k")
        
        return "".join(components)