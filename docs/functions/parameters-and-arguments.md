---
title: "Parameters and Arguments in Python Functions"
description: "Learn how to define and use parameters and arguments in Python functions."
sidebar_position: 2
---
# Python Function Parameters and Arguments

## Introduction

In Python, parameters and arguments are fundamental concepts in function definition and usage. They allow functions to receive input, making them more flexible and reusable.

## Parameters vs. Arguments

Before diving in, let's clarify the difference between parameters and arguments:

- **Parameters** are the variables listed in the function definition.
- **Arguments** are the actual values passed to the function when it's called.

## Defining Functions with Parameters

When defining a function, parameters are specified within the parentheses after the function name:

```python
def greet(name):
    print(f"Hello, {name}!")
```

Here, `name` is a parameter of the `greet` function.

## Calling Functions with Arguments

When calling a function, we provide arguments:

```python
greet("Alice")  # Output: Hello, Alice!
```

Here, "Alice" is an argument passed to the `greet` function.

## Types of Parameters

Python offers several ways to define parameters:

### 1. Positional Parameters

The most basic type. Arguments are matched to parameters based on their position.

```python
def describe_pet(animal_type, pet_name):
    print(f"I have a {animal_type} named {pet_name}.")

describe_pet("cat", "Whiskers")
# Output: I have a cat named Whiskers.
```

### 2. Default Parameters

You can assign default values to parameters. If an argument isn't provided for a parameter with a default value, the default is used.

```python
def greet(name, greeting="Hello"):
    print(f"{greeting}, {name}!")

greet("Bob")  # Output: Hello, Bob!
greet("Alice", "Good morning")  # Output: Good morning, Alice!
```

### 3. Keyword Arguments

When calling a function, you can specify arguments by parameter name.

```python
describe_pet(pet_name="Fido", animal_type="dog")
# Output: I have a dog named Fido.
```

This allows you to provide arguments in any order.

### 4. Arbitrary Positional Arguments (*args)

To accept any number of positional arguments, use `*args`:

```python
def print_args(*args):
    for arg in args:
        print(arg)

print_args(1, 2, 3, "four")
# Output:
# 1
# 2
# 3
# four
```

The function receives a tuple of arguments.

### 5. Arbitrary Keyword Arguments (**kwargs)

To accept any number of keyword arguments, use `**kwargs`:

```python
def print_kwargs(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_kwargs(name="Alice", age=30, city="New York")
# Output:
# name: Alice
# age: 30
# city: New York
```

The function receives a dictionary of keyword arguments.

## Combining Parameter Types

You can combine different types of parameters in a single function definition:

```python
def complex_function(pos1, pos2, *args, kwarg1="default", **kwargs):
    print(f"Positional: {pos1}, {pos2}")
    print(f"Args: {args}")
    print(f"Kwarg1: {kwarg1}")
    print(f"Kwargs: {kwargs}")

complex_function(1, 2, 3, 4, 5, kwarg1="custom", extra1="value1", extra2="value2")
# Output:
# Positional: 1, 2
# Args: (3, 4, 5)
# Kwarg1: custom
# Kwargs: {'extra1': 'value1', 'extra2': 'value2'}
```

## Parameter Order

When combining parameter types, they must appear in this order:

1. Positional parameters
2. `*args`
3. Default parameters
4. `**kwargs`

## Unpacking Arguments

You can unpack sequences or dictionaries into function arguments:

```python
def sum_numbers(a, b, c):
    return a + b + c

numbers = [1, 2, 3]
print(sum_numbers(*numbers))  # Output: 6

params = {"a": 1, "b": 2, "c": 3}
print(sum_numbers(**params))  # Output: 6
```

## Type Hinting for Parameters and Return Values

Python 3.5+ supports type hinting, which allows you to specify the expected types of function parameters and return values. While Python remains dynamically typed, type hints can improve code readability and catch potential type-related errors when used with static type checkers.

### Basic Type Hinting

```python
def greet(name: str) -> str:
    return f"Hello, {name}!"

result = greet("Alice")
print(result)  # Output: Hello, Alice!
```

In this example, `: str` indicates that `name` should be a string, and `-> str` indicates that the function returns a string.

### Type Hinting with Multiple Parameters

```python
def add_numbers(a: int, b: int) -> int:
    return a + b

result = add_numbers(5, 3)
print(result)  # Output: 8
```

### Type Hinting with Optional Parameters

Use the `Optional` type for parameters that might be `None`:

```python
from typing import Optional

def greet(name: str, greeting: Optional[str] = None) -> str:
    if greeting is None:
        greeting = "Hello"
    return f"{greeting}, {name}!"

print(greet("Alice"))  # Output: Hello, Alice!
print(greet("Bob", "Hi"))  # Output: Hi, Bob!
```

### Type Hinting with *args and **kwargs

```python
from typing import Any

def print_args(*args: Any) -> None:
    for arg in args:
        print(arg)

def print_kwargs(**kwargs: Any) -> None:
    for key, value in kwargs.items():
        print(f"{key}: {value}")
```

### Type Hinting with Collections

```python
from typing import List, Dict

def process_items(items: List[str]) -> Dict[str, int]:
    return {item: len(item) for item in items}

result = process_items(["apple", "banana", "cherry"])
print(result)  # Output: {'apple': 5, 'banana': 6, 'cherry': 6}
```

### Benefits of Type Hinting

1. Improved code readability
2. Better IDE support (auto-completion, error detection)
3. Easier to catch type-related errors early with static type checkers
4. Serves as documentation for function interfaces

### Note on Type Hinting

Remember that type hints are not enforced at runtime. They are hints for developers and tools, not constraints enforced by the Python interpreter.

## Best Practices

1. Use positional arguments for mandatory inputs and keyword arguments for optional inputs.
2. Use clear, descriptive parameter names.
3. Use default values for parameters that have a common case.
4. Document your function's parameters using docstrings.
5. Use type hints to improve code clarity and catch potential errors early.

## Common Pitfalls

### Mutable Default Arguments

Be cautious with mutable default arguments:

```python
def add_item(item, list=[]):  # Problematic
    list.append(item)
    return list

print(add_item(1))  # [1]
print(add_item(2))  # [1, 2] (not [2] as might be expected)
```

Instead, use `None` as the default and create the list inside the function:

```python
def add_item(item, list=None):
    if list is None:
        list = []
    list.append(item)
    return list
```

### Modifying Arguments

Remember that modifying mutable arguments (like lists or dictionaries) inside a function will affect the original object:

```python
def modify_list(lst):
    lst.append(4)

my_list = [1, 2, 3]
modify_list(my_list)
print(my_list)  # [1, 2, 3, 4]
```
