---
title: "Custom Exceptions in Python"
sidebar_label: "Custom Exceptions"
description: "How to create and use custom exceptions in Python to improve error handling and code readability."
sidebar_position: 3
---

# Creating and Using Custom Exceptions in Python

## Introduction to Custom Exceptions

Custom exceptions in Python allow you to define your own error types specific to your application or library. They help in creating more meaningful and precise error handling, improving code readability and maintainability.

## Why Create Custom Exceptions?

1. **Specificity**: To provide more specific error types for your application's unique scenarios.
2. **Clarity**: To make error handling more intuitive and self-documenting.
3. **Abstraction**: To hide implementation details while providing meaningful error information.
4. **Grouping**: To categorize related errors under a common base exception.

## Creating a Custom Exception

To create a custom exception, you simply need to define a new class that inherits from Python's built-in `Exception` class or any of its subclasses:

```python
class CustomError(Exception):
    pass
```

This creates a basic custom exception that behaves like any built-in exception.

## Adding Functionality to Custom Exceptions

You can add attributes and methods to your custom exceptions to provide more context:

```python
class ValueTooLargeError(Exception):
    def __init__(self, message, value):
        super().__init__(message)
        self.value = value

    def __str__(self):
        return f"{self.args[0]} (value: {self.value})"
```

## Creating an Exception Hierarchy

You can create a hierarchy of exceptions to represent different error categories:

```python
class DatabaseError(Exception):
    """Base class for database-related errors"""
    pass

class ConnectionError(DatabaseError):
    """Raised when a database connection fails"""
    pass

class QueryError(DatabaseError):
    """Raised when a database query fails"""
    pass
```

## Using Custom Exceptions

Here's how you can use custom exceptions in your code:

```python
def process_value(value):
    max_value = 100
    if value > max_value:
        raise ValueTooLargeError("Value exceeds maximum allowed", value)
    # Process the value...

# Using the custom exception
try:
    process_value(150)
except ValueTooLargeError as e:
    print(f"Error: {e}")
```

## Best Practices for Custom Exceptions

1. **Naming Convention**: Name your custom exceptions with an "Error" suffix (e.g., `CustomError`).

2. **Inherit Appropriately**: Inherit from the most appropriate built-in exception or create your own base exception class.

3. **Provide Context**: Include relevant information in your custom exceptions to aid in debugging.

4. **Document Your Exceptions**: Clearly document when and why your custom exceptions are raised.

5. **Keep It Simple**: Don't overcomplicate your exception classes. In many cases, a simple class definition is sufficient.

## Advanced Custom Exception Techniques

### Adding Traceback Information

You can include traceback information in your custom exceptions:

```python
import traceback

class DetailedError(Exception):
    def __init__(self, message):
        super().__init__(message)
        self.traceback = traceback.format_exc()

    def __str__(self):
        return f"{self.args[0]}\n\nTraceback:\n{self.traceback}"
```

### Creating Exceptions with Multiple Arguments

You can design exceptions that accept multiple arguments:

```python
class ConfigError(Exception):
    def __init__(self, message, filename, line_number):
        super().__init__(message)
        self.filename = filename
        self.line_number = line_number

    def __str__(self):
        return f"{self.args[0]} in {self.filename} at line {self.line_number}"
```

## Real-World Example: Custom Exceptions in a Banking Application

Here's a more comprehensive example demonstrating the use of custom exceptions in a banking application:

```python
class BankException(Exception):
    """Base exception class for banking operations"""
    pass

class InsufficientFundsError(BankException):
    def __init__(self, account, amount):
        self.account = account
        self.amount = amount
        super().__init__(f"Insufficient funds to withdraw ${amount} from account {account}")

class AccountNotFoundError(BankException):
    def __init__(self, account):
        self.account = account
        super().__init__(f"Account {account} not found")

class Bank:
    def __init__(self):
        self.accounts = {}

    def add_account(self, account_number, balance):
        self.accounts[account_number] = balance

    def withdraw(self, account_number, amount):
        if account_number not in self.accounts:
            raise AccountNotFoundError(account_number)
        
        if self.accounts[account_number] < amount:
            raise InsufficientFundsError(account_number, amount)
        
        self.accounts[account_number] -= amount
        return amount

# Using the custom exceptions
bank = Bank()
bank.add_account("12345", 1000)

try:
    bank.withdraw("12345", 1500)
except InsufficientFundsError as e:
    print(f"Transaction failed: {e}")
except AccountNotFoundError as e:
    print(f"Error: {e}")
except BankException as e:
    print(f"A banking error occurred: {e}")
```

Creating and using custom exceptions allows you to handle errors in a way that's specific to your application's needs. By following these guidelines and best practices, you can create more robust, readable, and maintainable Python code that communicates errors effectively and facilitates easier debugging and error handling.