---
title: "Loops in Python"
description: "Learn how to use for and while loops in Python to repeat code blocks."
sidebar_position: 2
---

# Python Loops for Beginners

Loops are fundamental programming constructs that allow you to repeat a block of code multiple times. These help you accomplish repetitive tasks, like searching for a letter in a word or printing "Hello" 100 times.

In Python, there are two main types of loops: `for` loops and `while` loops. Let's explore each of them in detail.
## 1. For Loops - In-Depth

### Iterables in For Loops

In Python, an iterable is any object that can be looped over. Common iterables include:

- Lists
- Tuples
- Strings
- Dictionaries
- Sets
- Files

Let's look at examples of using different iterables in for loops:

#### Lists

```python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(f"I like {fruit}")
```

```
Output:
I like apple
I like banana
I like cherry
```
#### Tuples

```python
coordinates = (4, 5)
for coord in coordinates:
    print(f"Coordinate: {coord}")
```

```
Output:
Coordinate: 4
Coordinate: 5
```
#### Strings

```python
word = "Python"
for char in word:
    print(f"Letter: {char}")
```

```
Output:
Letter: P
Letter: y
Letter: t
Letter: h
Letter: o
Letter: n
```
#### Dictionaries

When looping through dictionaries, you can access keys, values, or both:

```python
person = {"name": "Alice", "age": 30, "city": "New York"}

# Looping through keys
for key in person:
    print(f"Key: {key}")

# Looping through values
for value in person.values():
    print(f"Value: {value}")

# Looping through both keys and values
for key, value in person.items():
    print(f"{key}: {value}")
```

```
Output:
Key: name
Key: age
Key: city
Value: Alice
Value: 30
Value: New York
name: Alice
age: 30
city: New York
```

#### Sets

```python
unique_numbers = {1, 3, 5, 7, 9}
for num in unique_numbers:
    print(f"Number: {num}")
```

```
Output:
Number: 1
Number: 3
Number: 5
Number: 7
Number: 9
```
### Using range() in For Loops

The `range()` function is a versatile tool for creating sequences of numbers. It can take one, two, or three arguments:

- `range(stop)`: Generates numbers from 0 to stop-1
- `range(start, stop)`: Generates numbers from start to stop-1
- `range(start, stop, step)`: Generates numbers from start to stop-1, incrementing by step

Examples:

```python
# range with one argument
for i in range(5):
    print(i)  # Prints 0, 1, 2, 3, 4

# range with two arguments
for i in range(2, 6):
    print(i)  # Prints 2, 3, 4, 5

# range with three arguments
for i in range(1, 10, 2):
    print(i)  # Prints 1, 3, 5, 7, 9

# Counting backwards
for i in range(5, 0, -1):
    print(i)  # Prints 5, 4, 3, 2, 1
```

### Enumerate Function

When you need both the index and the value in a loop, use the `enumerate()` function:

```python
fruits = ["apple", "banana", "cherry"]
for index, fruit in enumerate(fruits):
    print(f"Index {index}: {fruit}")
```

Output:
```
Index 0: apple
Index 1: banana
Index 2: cherry
```

## 2. While Loops - In-Depth

While loops are more flexible than for loops and can be used in situations where the number of iterations is not known in advance.

### Using While Loops with Counters

A common pattern is to use a counter variable to control the loop:

```python
counter = 0
while counter < 5:
    print(f"Counter is {counter}")
    counter += 1
```

### While Loops with Complex Conditions

You can use more complex conditions in while loops:

```python
import random

total = 0
while total < 21:
    roll = random.randint(1, 6)
    total += roll
    print(f"Rolled a {roll}. Total is now {total}")

print("Game over!")
```

### Infinite Loops and Break Statements

Sometimes, you might want to create an infinite loop and use a `break` statement to exit when a certain condition is met:

```python
while True:
    user_input = input("Enter a number (or 'q' to quit): ")
    if user_input.lower() == 'q':
        break
    number = float(user_input)
    print(f"The square of {number} is {number**2}")

print("Thanks for playing!")
```

### Continue Statement

The `continue` statement skips the rest of the current iteration and moves to the next one:

```python
for num in range(10):
    if num % 2 == 0:
        continue
    print(f"Odd number: {num}")
```

This will only print odd numbers.

## Real-Life Use Cases

### For Loops: Data Processing

Imagine you have a list of temperatures in Celsius and want to convert them to Fahrenheit:

```python
celsius_temps = [0, 10, 20, 30, 40]
fahrenheit_temps = []

for temp in celsius_temps:
    fahrenheit = (temp * 9/5) + 32
    fahrenheit_temps.append(fahrenheit)

print(f"Celsius: {celsius_temps}")
print(f"Fahrenheit: {fahrenheit_temps}")
```

### While Loops: User Input Validation

Here's an example of using a while loop for input validation:

```python
while True:
    age = input("Please enter your age: ")
    if age.isdigit() and 0 < int(age) < 120:
        age = int(age)
        break
    print("Invalid input. Please enter a number between 1 and 119.")

print(f"Your age is {age}")
```

This loop continues until the user provides a valid age.

Both for loops and while loops are powerful tools in Python. The choice between them often depends on the specific requirements of your task and the nature of the data you're working with.