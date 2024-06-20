---
title: "Variables and Data Types"
sidebar_position: 1
---

Variables and Data Types
--------------------------

Variables and data types are fundamental concepts in Python programming. Let's dive into each of them:

Variables:

- A variable is a named storage location in memory that holds a value.
- It allows you to store and manipulate data in your program.
- In Python, you can assign a value to a variable using the assignment operator `=`.
- Variable names should be descriptive and follow certain naming conventions (e.g., lowercase with underscores for
  separation).
- Examples:
  ```python
  age = 25
  name = "John"
  is_student = True
  ```

It is completely okay if you don't understand 100% of this, I will go more into depth for each one later on. This is
primarily to introduce you to data types in general. Each data type will have it's own page further along in this
course. Those will be linked here if you wish to view them, but you do not have to master them right away.

Data Types:

- Data types define the kind of data that a variable can hold.
- Python has several built-in data types, including:
    1. Numeric Types:
        - Integer (int): Whole numbers, e.g., -5, 0, 10.
        - Float (float): Numbers with decimal points, e.g., 3.14, -2.5.
        - Complex (complex): Numbers with real and imaginary parts, e.g., 2 + 3j.
    2. Sequence Types:
        - String (str): A sequence of characters, enclosed in single or double quotes, e.g., "Hello", 'Python'.
        - List (list): An ordered, mutable collection of elements, enclosed in square brackets, e.g., \[1, 2, 3].
        - Tuple (tuple): An ordered, immutable collection of elements, enclosed in parentheses, e.g., (1, 2, 3).
    3. Mapping Type:
        - Dictionary (dict): An unordered collection of key-value pairs, enclosed in curly braces, e.g., \{"name": "
          John", "age": 25}.
    4. Set Types:
        - Set (set): An unordered collection of unique elements, enclosed in curly braces, e.g., \{1, 2, 3}.
        - Frozenset (frozenset): An immutable version of a set.
    5. Boolean Type:
        - Boolean (bool): Represents either True or False.
- You can use the `type()` function to check the data type of a variable.

Here are some real code examples for each one:

```python
# Integers
myInteger = 10
number = 1234
important_number = 19230182

# Float
myFloat = 1.2345
myPi = 3.1415

# Complex ( More on these later, they don't look like the others)
z1 = 2 + 3j
z2 = complex(4, -1)

# String (str)
name = "John"
street = "1234 main st."
dogs_name = "Rooster"

# Lists
fruits = ["apple", "banana", "orange", "grape", "kiwi"]
cars = ["Kia", "Ford", "Dodge"]
drinks = ["Water", "Dr Pepper", "Coke", "Tea"]

# Dictionaries (dict)
info = {"name":"John","age":392, "hair color":"purple"}

# Dictionaries, but organized how they are usually used
person = {
    "name": "John Doe",
    "age": 30,
    "city": "New York",
    "occupation": "Engineer",
    "married": True
}

grades = {
    "Math": 85,
    "Science": 92,
    "English": 88,
    "History": 79,
    "Art": 95
}

car = {
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "color": "Blue",
    "price": 25000
}

# Sets, they look like lists but with curly braces instead
colors = {"red", "blue", "green", "yellow", "orange", "purple"}
prime_numbers = {2, 3, 5, 7, 11, 13, 17, 19, 23, 29}
languages = {"Python", "Java", "C++", "JavaScript", "Ruby", "C#", "Go"}

# Frozen sets, same as previous but immutable
frozen_set1 = frozenset(["apple", "banana", "orange", "grape", "kiwi"])
frozen_set2 = frozenset([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
frozen_set3 = frozenset(["Python", "Java", "C++", "JavaScript", "Ruby", "Python"])

# Booleans (bool)
is_my_computer_on = True
am_I_using_python = True
my_computer_is_on_fire = False
```
