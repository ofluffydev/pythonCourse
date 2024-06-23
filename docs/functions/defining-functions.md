---
title: "Defining Functions"
description: "Learn how to define functions in Python."
sidebar_position: 1
---

# Defining Functions in Python

## Introduction to Functions

In Python, functions are reusable blocks of code that perform a specific task. They help organize code, make it more readable, and allow for code reuse. The `def` keyword is used to define functions in Python.

## The 'def' Keyword

The `def` keyword tells Python that you're about to define a function. It's followed by the function name and a pair of parentheses `()`.

## Basic Syntax for Defining Functions

The basic syntax for defining a function in Python is:

```python
def function_name():
    # Function body
    # Indented block of code
```

Let's break this down:

1. `def`: This keyword initiates the function definition.
2. `function_name`: This is the name you give to your function. It should follow Python's naming conventions (usually lowercase with underscores for readability).
3. `()`: Parentheses follow the function name. (We'll cover parameters in a later guide.)
4. `:`: A colon marks the end of the function header.
5. Indented block: The function body is indented. This indentation is crucial in Python as it defines the scope of the function.

## Examples of Function Definitions

### Simple Function Definition

```python
def greet():
    print("Hello, World!")
```

This function named `greet` will print "Hello, World!" when called.

### Function with Multiple Lines

```python
def describe_python():
    print("Python is a programming language.")
    print("It's known for its simplicity and readability.")
    print("Python is widely used in various fields.")
```

This function contains multiple lines of code, all indented to show they're part of the function body.

## Indentation in Function Definitions

Indentation is crucial in Python. It defines the body of the function. All code that is part of the function must be indented. The standard is to use 4 spaces for each indentation level.

```python
def example_function():
    print("This is inside the function")
    print("This is also inside the function")

print("This is outside the function")
```

In this example, the first two print statements are part of the function because they're indented. The last print statement is not part of the function as it's not indented.

## Naming Functions

When naming functions:

1. Use lowercase letters and underscores for readability (snake_case).
2. Choose descriptive names that indicate what the function does.
3. Avoid using Python keywords or built-in function names.

Good examples:
```python
def calculate_area():
    # Function body

def convert_temperature():
    # Function body

def validate_user_input():
    # Function body
```

## Empty Functions

Sometimes, you might want to define a function without adding its implementation immediately. Python allows this using the `pass` statement:

```python
def function_to_be_implemented_later():
    pass
```

The `pass` statement is a null operation; nothing happens when it executes. It's used as a placeholder where code will eventually go.

## Docstrings in Functions

While not required, it's good practice to include a docstring (documentation string) in your functions. Docstrings are enclosed in triple quotes and should appear right after the function definition:

```python
def greet_user():
    """
    This function greets the user.
    It prints a welcoming message.
    """
    print("Welcome, user!")
```

Docstrings help document what the function does, which is useful for both you and other developers who might use your code.

## Common Mistakes When Defining Functions
- Forgetting the colon `:` at the end of the function header.
```python
def greet()  # Missing colon, raises a syntax error
    print("Hello, World!")
```
- Incorrect indentation of the function body, see [Indentation](/docs/basic-python-syntax/indentation) section.
```python
def greet():
print("Hello, World!")  # Incorrect indentation, throws an error because the function appears to be empty to the interpreter
```
- Not following Python's naming conventions for function names, this can make your code harder to read.
```python
def Greet():  # Incorrect naming, should be greet, uppercase letters are mainly used for class names
    print("Hello, World!")
```
- Missing the `()` after the function name, even if the function doesn't take any arguments. The parentheses are required.
```python
def greet:  # Missing parentheses, raises a syntax error
    print("Hello, World!")
```
- Useless wrapper functions, where a function only uses another function without adding any additional functionality.
```python
def print_greeting():
    greet()  # Unnecessary wrapper function, you can call greet directly
```

## Conclusion

Defining functions in Python using the `def` keyword is straightforward but powerful. Remember these key points:

1. Use `def` to start a function definition.
2. Choose a descriptive name for your function.
3. Follow the function name with parentheses and a colon.
4. Indent the function body.
5. Use docstrings to document your functions.

Functions are a fundamental building block in Python programming. Mastering how to define them is your first step towards writing more organized, reusable, and efficient code.