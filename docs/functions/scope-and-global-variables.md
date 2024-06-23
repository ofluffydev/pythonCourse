---
title: "Scope and Global Variables in Python"
description: "Variable scope and global variables in Python."
sidebar_position: 4
---
# Scope and Global Variables in Python

## Introduction to Scope

In Python, scope refers to the region of a program where a variable is accessible. Understanding scope is crucial for writing clean, efficient, and bug-free code. Python uses a concept called LEGB rule to determine the scope of variables.

## The LEGB Rule

LEGB stands for Local, Enclosing, Global, and Built-in. This rule defines the order in which Python looks up variable names:

1. **Local (L)**: Variables defined within a function
2. **Enclosing (E)**: Variables in the local scope of enclosing functions
3. **Global (G)**: Variables defined at the top level of a module or declared global in a function
4. **Built-in (B)**: Names preassigned in Python (like `print`, `len`)

## Local Scope

Local scope refers to variables defined within a function. These variables are only accessible inside the function.

```python
def my_function():
    x = 10  # Local variable
    print(x)

my_function()  # Output: 10
print(x)  # Raises NameError: name 'x' is not defined
```

In this example, `x` is a local variable and is only accessible within `my_function`.

## Enclosing Scope

Enclosing scope occurs in nested functions, where the inner function has access to variables in the outer function.

```python
def outer_function():
    y = 20
    def inner_function():
        print(y)  # Accesses y from the enclosing scope
    inner_function()

outer_function()  # Output: 20
```

Here, `inner_function` can access the variable `y` from its enclosing scope.

## Global Scope

Global scope refers to variables defined at the top level of a module or declared global in a function.

```python
z = 30  # Global variable

def print_global():
    print(z)

print_global()  # Output: 30
```

In this case, `z` is a global variable and can be accessed inside the function.

## The `global` Keyword

The `global` keyword is used to declare that a variable inside a function is global.

```python
count = 0

def increment():
    global count
    count += 1
    print(count)

increment()  # Output: 1
increment()  # Output: 2
```

Without the `global` keyword, Python would create a new local variable `count` inside the function.

## The `nonlocal` Keyword

For nested functions, `nonlocal` is used to work with variables in the enclosing (but not global) scope.

```python
def outer():
    x = 10
    def inner():
        nonlocal x
        x += 5
        print(x)
    inner()
    print(x)

outer()
# Output:
# 15
# 15
```

Here, `nonlocal` allows the inner function to modify the variable `x` in the enclosing scope.

## Global Variables: Best Practices and Pitfalls

While global variables can be useful, they should be used sparingly. Here are some considerations:

### Advantages:
1. Useful for constants
2. Can simplify code in some cases (e.g., configuration settings)

### Disadvantages:
1. Can make code harder to understand and debug
2. May lead to naming conflicts
3. Can make functions less predictable and reusable

### Best Practices:
1. Minimize the use of global variables
2. Use global variables for constants (use uppercase names by convention)
3. If you must use global variables, clearly document their purpose and usage

## Scope and List Comprehensions

List comprehensions have their own scope in Python 3.x:

```python
x = 10
[x for x in range(5)]
print(x)  # Output: 10
```

The `x` in the list comprehension doesn't affect the global `x`.

## Variable Shadowing

When a variable in a local scope has the same name as a variable in the enclosing or global scope, it shadows the outer variable:

```python
x = 10

def print_x():
    x = 20  # This shadows the global x
    print(x)

print_x()  # Output: 20
print(x)   # Output: 10
```

## Using `globals()` and `locals()`

Python provides built-in functions to work with global and local namespaces:

```python
x = 10
y = 20

def print_vars():
    z = 30
    print(globals())  # Prints all global variables
    print(locals())   # Prints all local variables

print_vars()
```

These functions return dictionaries containing the current global and local symbol tables.

## Scope in Classes

Classes introduce another level of scope. Class variables are shared among all instances, while instance variables are unique to each instance:

```python
class MyClass:
    class_var = 10  # Class variable

    def __init__(self):
        self.instance_var = 20  # Instance variable

obj1 = MyClass()
obj2 = MyClass()

print(obj1.class_var, obj1.instance_var)  # Output: 10 20
print(obj2.class_var, obj2.instance_var)  # Output: 10 20

MyClass.class_var = 30
print(obj1.class_var, obj2.class_var)  # Output: 30 30
```

Understanding scope and global variables is essential for writing efficient and maintainable Python code. While global variables can be useful in certain situations, it's generally best to limit their use and rely on local variables and function parameters for most tasks.