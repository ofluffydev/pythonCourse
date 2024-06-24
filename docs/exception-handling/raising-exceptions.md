---
title: "Raising Exceptions in Python"
sidebar_label: "Raising Exceptions"
sidebar_position: 2
---
# Raising Exceptions in Python: A Comprehensive Guide

## Introduction to Raising Exceptions

Raising exceptions is a powerful feature in Python that allows you to signal errors or exceptional conditions in your code. It's an essential part of creating robust and reliable software.

## The `raise` Statement

In Python, you use the `raise` statement to throw an exception. The basic syntax is:

```python
raise ExceptionType("Error message")
```

## When to Raise Exceptions

Exceptions should be raised when:
1. An error occurs that the current function can't handle
2. Invalid input is provided to a function
3. A required resource is unavailable
4. A precondition for the operation is not met

## Raising Built-in Exceptions

Python provides many built-in exception types. Here are some common ones:

```python
# ValueError: For invalid values
def set_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative")

# TypeError: For wrong type of argument
def add_numbers(a, b):
    if not (isinstance(a, (int, float)) and isinstance(b, (int, float))):
        raise TypeError("Both arguments must be numbers")

# IndexError: For invalid indices
def get_item(lst, index):
    if index >= len(lst):
        raise IndexError("Index out of range")

# FileNotFoundError: For missing files
def read_file(filename):
    if not os.path.exists(filename):
        raise FileNotFoundError(f"The file {filename} does not exist")
```

## Adding Information to Exceptions

You can add additional information when raising an exception:

```python
def process_data(data):
    if not data:
        raise ValueError("No data provided", {"error_code": 1001})
```

## Re-raising Exceptions

Sometimes you want to catch an exception, perform some action, and then re-raise it:

```python
try:
    # Some code that might raise an exception
    result = risky_operation()
except SomeException as e:
    logger.error("An error occurred")
    raise  # Re-raises the caught exception
```

## Exception Chaining

Python 3 allows you to chain exceptions, preserving the original cause:

```python
try:
    # Some code that might raise an exception
    result = risky_operation()
except SomeException as e:
    raise RuntimeError("A runtime error occurred") from e
```

## Raising from None

If you want to raise a new exception while suppressing the original one:

```python
try:
    # Some code that might raise an exception
    result = risky_operation()
except SomeException:
    raise ValueError("A different error occurred") from None
```

## Best Practices for Raising Exceptions

1. **Be Specific**: Use specific exception types for different error scenarios.
2. **Provide Informative Messages**: Include detailed information in the exception message.
3. **Document Exceptions**: In function docstrings, specify which exceptions might be raised.
4. **Don't Overuse**: Raise exceptions for exceptional conditions, not for normal control flow.
5. **Keep it Clean**: Don't catch an exception just to raise another one unless you're adding information.

## Example: A Robust Function Using Exceptions

Here's an example that brings together several concepts:

```python
def process_user_input(input_string):
    """
    Process user input, raising appropriate exceptions for invalid inputs.

    Args:
        input_string (str): The user input to process.

    Returns:
        int: The processed input as an integer.

    Raises:
        ValueError: If the input is not a valid integer or not within the valid range (1-100).
    """
    try:
        value = int(input_string)
    except ValueError:
        raise ValueError("Input must be a valid integer") from None

    if not 1 <= value <= 100:
        raise ValueError("Input must be between 1 and 100")

    return value

# Usage
try:
    result = process_user_input("42")
    print(f"Processed input: {result}")
except ValueError as e:
    print(f"Error processing input: {e}")
```

Raising exceptions effectively is a key skill in Python programming. It allows you to handle errors gracefully, provide clear feedback, and create more robust and maintainable code. By following these guidelines and best practices, you can significantly improve the reliability and usability of your Python programs.