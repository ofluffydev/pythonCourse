---
title: "Control flow in Python"
description: "Using break, continue, and pass statements to control the flow of your loops and functions."
sidebar_position: 3
---

# Python Control Flow Statements: Break, Continue, and Pass

In Python, control flow statements are used to change the order in which code is executed. Three important control flow statements are `break`, `continue`, and `pass`. These statements help you control the flow of your loops and functions more precisely. Let's explore each of them in detail.

## 1. Break Statement

The `break` statement is used to exit a loop prematurely, regardless of whether the loop condition is still true or not.

### How it works:
- When Python encounters a `break` statement inside a loop, it immediately terminates the loop.
- The program then continues with the next statement after the loop.

### Example:

```python
# Finding the first even number in a list
numbers = [1, 3, 5, 7, 8, 9, 10, 11]

for num in numbers:
    if num % 2 == 0:
        print(f"The first even number is: {num}")
        break  # Exit the loop once we find an even number

print("Loop finished")
```

Output:
```
The first even number is: 8
Loop finished
```

### Real-life analogy:
Imagine you're searching for your keys in different rooms of your house. Once you find the keys, you stop searching and leave the house. The `break` statement is like finding your keys – you stop the search (exit the loop) immediately.

### When to use:
- When you're searching for something and want to stop once you've found it.
- To exit a loop when a certain condition is met, saving unnecessary iterations.

## 2. Continue Statement

The `continue` statement skips the rest of the current iteration and moves to the next iteration of the loop.

### How it works:
- When Python encounters a `continue` statement, it skips any remaining code in the current loop iteration.
- The loop then moves on to the next iteration.

### Example:

```python
# Printing only odd numbers
for num in range(1, 11):
    if num % 2 == 0:
        continue  # Skip even numbers
    print(num)
```

Output:
```
1
3
5
7
9
```

### Real-life analogy:
Imagine you're going through your wardrobe to donate clothes. When you find an item you want to keep, you put it back and continue looking through the rest. The `continue` statement is like putting an item back – you skip it and move on to the next one.

### When to use:
- When you want to skip certain iterations based on a condition.
- To avoid nested conditional statements, making your code cleaner.

## 3. Pass Statement

The `pass` statement is a null operation – nothing happens when it executes. It's used as a placeholder where syntactically some code is required, but no action is needed.

### How it works:
- When Python encounters a `pass` statement, it simply moves to the next line of code.
- It's often used as a placeholder in functions or classes that you plan to implement later.

### Example:

```python
# Using pass in a function that's not implemented yet
def not_implemented_function():
    pass

# Using pass in a conditional statement
x = 10
if x > 5:
    pass  # We'll add code here later
else:
    print("x is not greater than 5")
```

### Real-life analogy:
Think of `pass` as a sticky note that says "TODO" in your code. It's a reminder that you need to add something here later, but for now, it's okay to leave it blank.

### When to use:
- As a placeholder in functions or classes you plan to implement later.
- In loops or conditional statements where you don't want any action to occur.

## Comparing Break, Continue, and Pass

Let's see how these statements behave differently in the same scenario:

```python
for i in range(1, 6):
    if i == 3:
        print(f"At number {i}:")
        print("  Using break")
        break
    print(f"Number: {i}")

print("\n--- Next example ---\n")

for i in range(1, 6):
    if i == 3:
        print(f"At number {i}:")
        print("  Using continue")
        continue
    print(f"Number: {i}")

print("\n--- Next example ---\n")

for i in range(1, 6):
    if i == 3:
        print(f"At number {i}:")
        print("  Using pass")
        pass
    print(f"Number: {i}")
```

Output:
```
Number: 1
Number: 2
At number 3:
  Using break

--- Next example ---

Number: 1
Number: 2
At number 3:
  Using continue
Number: 4
Number: 5

--- Next example ---

Number: 1
Number: 2
At number 3:
  Using pass
Number: 3
Number: 4
Number: 5
```

This example clearly shows how `break` exits the loop, `continue` skips the rest of the current iteration, and `pass` does nothing, allowing the loop to continue normally.

## Practice Exercises

1. Write a program that asks the user for numbers and stops when they enter 0, using a `break` statement.
2. Create a loop that prints all numbers from 1 to 20, but skips multiples of 3, using a `continue` statement.
3. Define an empty function called `future_feature()` using the `pass` statement as a placeholder.

These control flow statements are powerful tools that can make your code more efficient and readable when used correctly. Practice using them in different scenarios to become more comfortable with their behavior. 

You will see them used more and more as you move to more advanced programs.