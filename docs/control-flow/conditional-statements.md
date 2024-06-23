---
title: "Conditional Statements"
description: "Using conditional statements to control the flow of your program."
sidebar_position: 1
---

# The Basics of Boolean Logic
Before we delve into conditional statements, it's crucial to understand boolean logic. In Python, conditions are evaluated to boolean values: True or False. Kind of like flipping a light switch, it can either be on (True), or off (False).

## Common comparison operators:
- == (equal to)
- != (not equal to)
- \> (greater than)
- < (less than)
- \>= (greater than or equal to)
- \<= (less than or equal to)

Example:
```python
x = 5
print(x == 5)   # True
print(x > 10)   # False
print(x <= 5)   # True
```

# Detailed Breakdown of if, elif, and else

## The 'if' Statement:
The 'if' statement is the most basic form of conditional execution.

Syntax:
```python
if condition:
    # code block
```

The condition is evaluated. If it's True, the indented code block is executed. If False, it's skipped.

Example with explanation:
```python
temperature = 22

if temperature > 30:
    print("It's hot outside!")

# In this case, nothing will be printed because the condition is False
```

## The 'else' Statement:
The 'else' statement provides an alternative execution path when the 'if' condition is False.

Syntax:
```python
if condition:
    # code block for True condition
else:
    # code block for False condition
```

Example with explanation:
```python
is_raining = True

if is_raining:
    print("Bring an umbrella!")
else:
    print("Enjoy the sunshine!")

# This will print "Bring an umbrella!" because is_raining is True
```

## The 'elif' Statement:
'elif' allows you to check multiple conditions sequentially.

Syntax:
```python
if condition1:
    # code block for condition1
elif condition2:
    # code block for condition2
elif condition3:
    # code block for condition3
else:
    # code block if all conditions are False
```

Example with explanation:
```python
score = 85

if score >= 90:
    print("A grade")
elif score >= 80:
    print("B grade")
elif score >= 70:
    print("C grade")
elif score >= 60:
    print("D grade")
else:
    print("F grade")

# This will print "B grade" because score is 85, which meets the second condition
```

## Logical Operators:
- and: True if both conditions are True
- or: True if at least one condition is True
- not: Inverts the boolean value

Example:
```python
age = 25
has_license = True
is_insured = False

if age >= 18 and has_license and is_insured:
    print("You can rent a car")
elif age >= 18 and has_license and not is_insured:
    print("You need insurance to rent a car")
else:
    print("You cannot rent a car")

# This will print "You need insurance to rent a car"
```

## Nested Conditionals:
You can place conditional statements inside other conditional statements.

Example:
```python
is_weekend = True
weather = "sunny"

if is_weekend:
    if weather == "sunny":
        print("Let's go to the beach!")
    elif weather == "rainy":
        print("Let's watch a movie at home.")
    else:
        print("Let's visit a museum.")
else:
    print("It's a workday, focus on your tasks.")

# This will print "Let's go to the beach!"
```

## Truthy and Falsy Values

In Python, values can be evaluated as True or False in a boolean context.

Falsy values:
- False
- None
- 0
- 0.0
- '' (empty string)
- [] (empty list)
- {} (empty dictionary)

All other values are considered Truthy.

Example:
```python
name = ""
if name:
    print("Hello,", name)
else:
    print("Name is empty")

# This will print "Name is empty" because an empty string is Falsy
```

# The Ternary Operator

Python offers a concise way to write simple if-else statements in a single line.

Syntax: 
```python
value_if_true if condition else value_if_false
```

Example:
```python
age = 20
status = "adult" if age >= 18 else "minor"
print(status)  # This will print "adult"
```

# Common Pitfalls and Best Practices

## Be careful with equality checks:
```python
x = 5
if x == 5:  # Correct
    print("x is 5")

if x = 5:  # Incorrect! This is assignment, not comparison
    print("This will cause an error")
```

## Use 'in' for checking membership:
```python
fruits = ['apple', 'banana', 'cherry']
if 'apple' in fruits:
    print("We have apples")
```

## Avoid deeply nested conditionals:
Instead of:
```python
if condition1:
    if condition2:
        if condition3:
            # do something
```
Consider using:
```python
if condition1 and condition2 and condition3:
    # do something
```

## Use 'elif' instead of multiple 'if' statements when checking mutually exclusive conditions:
```python
# Good
if x < 0:
    print("Negative")
elif x == 0:
    print("Zero")
else:
    print("Positive")

# Less efficient
if x < 0:
    print("Negative")
if x == 0:
    print("Zero")
if x > 0:
    print("Positive")
```

Practice Exercises:

1. Create a program that determines the season based on the month and hemisphere.
2. Write a script that calculates a student's grade based on their score, including plus and minus grades (e.g., A+, B-, etc.).
3. Develop a simple adventure game where the user makes choices that lead to different outcomes using nested conditionals.

