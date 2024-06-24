---
title: "Try, Except, and Finally Blocks"
description: "Learn how to handle exceptions in Python using try, except, and finally blocks."
sidebar_position: 1
---

# Exception Handling in Python: Try, Except, and Finally

## Introduction to Exception Handling

Exception handling is a crucial aspect of writing robust and reliable Python code. It allows you to gracefully manage errors and unexpected situations that may occur during program execution. Python provides a powerful mechanism for handling exceptions using `try`, `except`, and `finally` blocks.

## The Try Block

The `try` block is used to enclose the code that might raise an exception. It's the first step in exception handling.

Syntax:
```python
try:
    # Code that might raise an exception
```

Example:
```python
try:
    result = 10 / 0  # This will raise a ZeroDivisionError
    print(result)
```

## The Except Block

The `except` block catches and handles exceptions that are raised in the `try` block. You can have multiple `except` blocks to handle different types of exceptions.

Syntax:
```python
try:
    # Code that might raise an exception
except ExceptionType:
    # Handle the exception
```

Example:
```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Error: Division by zero!")
```

### Handling Multiple Exceptions

You can handle multiple exception types in a single `except` block or use multiple `except` blocks:

```python
try:
    # Some code that might raise exceptions
    num = int(input("Enter a number: "))
    result = 10 / num
except ValueError:
    print("Error: Please enter a valid number!")
except ZeroDivisionError:
    print("Error: Cannot divide by zero!")
```

### Catching Multiple Exceptions in One Block

```python
try:
    # Some code
except (ValueError, ZeroDivisionError):
    print("An error occurred!")
```

### Using a General Exception Handler

While it's generally better to catch specific exceptions, you can use a general `except` block to catch any exception:

```python
try:
    # Some code
except Exception as e:
    print(f"An error occurred: {e}")
```

## The Else Block

The `else` block is executed if no exception is raised in the `try` block. It's useful for code that should only run if the `try` block succeeds.

```python
try:
    num = int(input("Enter a number: "))
except ValueError:
    print("That's not a valid number!")
else:
    print(f"You entered {num}")
```

## The Finally Block

The `finally` block is always executed, whether an exception occurred or not. It's used for cleanup operations that should be performed regardless of whether an exception was raised.

Syntax:
```python
try:
    # Some code
except ExceptionType:
    # Handle the exception
finally:
    # Cleanup code
```

Example:
```python
try:
    f = open("example.txt", "r")
    # Perform file operations
except FileNotFoundError:
    print("The file was not found")
finally:
    f.close()  # This ensures the file is closed whether an exception occurred or not
```

## Best Practices and Tips

1. **Be Specific**: Catch specific exceptions rather than using a general `except` clause.

2. **Don't Suppress Exceptions**: Avoid empty `except` blocks as they can hide errors.

3. **Use `finally` for Cleanup**: Use the `finally` block for cleanup operations like closing files or network connections.

4. **Avoid Catching `BaseException`**: This can catch system exits and keyboard interrupts, which you usually want to allow.

5. **Use Context Managers**: When possible, use context managers (`with` statement) for resource management.

6. **Log Exceptions**: In production code, log exceptions for debugging purposes.

7. **Re-raise Exceptions**: If you can't handle an exception completely, consider re-raising it after logging.

## Advanced Exception Handling

### Exception Chaining

Python 3 allows you to chain exceptions, preserving the original cause:

```python
try:
    # Some code that raises an exception
except SomeException as e:
    raise RuntimeError("A runtime error occurred") from e
```

### Using `sys.exc_info()`

For more detailed exception information:

```python
import sys

try:
    # Some code that raises an exception
except:
    exc_type, exc_value, exc_traceback = sys.exc_info()
    print(f"Exception type: {exc_type}")
    print(f"Exception value: {exc_value}")
```

## Real-World Examples

### File Handling

```python
def read_file(filename):
    try:
        with open(filename, 'r') as file:
            return file.read()
    except FileNotFoundError:
        print(f"Error: The file '{filename}' does not exist.")
    except PermissionError:
        print(f"Error: You don't have permission to read '{filename}'.")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
    finally:
        print("File operation attempt completed.")

content = read_file("example.txt")
```

### Network Request

```python
import requests

def fetch_data(url):
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raises an HTTPError for bad responses
        return response.json()
    except requests.exceptions.HTTPError as e:
        print(f"HTTP Error occurred: {e}")
    except requests.exceptions.ConnectionError:
        print("Error: Unable to connect to the server.")
    except requests.exceptions.Timeout:
        print("Error: The request timed out.")
    except requests.exceptions.RequestException as e:
        print(f"An unexpected error occurred: {e}")
    finally:
        print("Request operation completed.")

data = fetch_data("https://api.example.com/data")
```

Understanding and effectively using try, except, and finally blocks are essential for writing robust Python code. These constructs allow you to handle errors gracefully, perform necessary cleanup operations, and create more reliable and user-friendly programs.