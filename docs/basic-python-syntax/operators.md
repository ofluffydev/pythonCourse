---
title: "Operators"
sidebar_label: "Operators"
sidebar_position: 2
---

Operators in Python are special symbols or keywords that perform operations on variables and values. They're fundamental to programming and are used to manipulate data, perform calculations, and make comparisons. Let's break down the main types of operators in Python with examples and real-life use cases.

## Arithmetic Operators
These perform basic mathematical operations.
    
   - Addition (+): Adds two numbers
   - Subtraction (-): Subtracts the right operand from the left 
   - Multiplication (*): Multiplies two numbers 
   - Division (/): Divides the left operand by the right (always results in a float)
   - Floor Division (//): Divides and rounds down to the nearest integer 
   - Modulus (%): Returns the remainder of a division 
   - Exponentiation (**): Raises the left operand to the power of the right
    
   Example:
   ```python
   a = 10
   b = 3
    
   print(a + b)  # Output: 13
   print(a - b)  # Output: 7
   print(a * b)  # Output: 30
   print(a / b)  # Output: 3.3333333333333335
   print(a // b) # Output: 3
   print(a % b)  # Output: 1
   print(a ** b) # Output: 1000
   ```
    
   Real-life use case: Calculating total cost in a shopping cart
   ```python
   item1_price = 15.99
   item2_price = 24.50
   quantity1 = 2
   quantity2 = 1
   tax_rate = 0.08
    
   subtotal = (item1_price * quantity1) + (item2_price * quantity2)
   tax = subtotal * tax_rate
   total = subtotal + tax
    
   print(f"Total cost: ${total:.2f}")
   ```

## Comparison Operators
These compare two values and return a boolean result.

- Equal to (\==)
- Not equal to (!=)
- Greater than (>)
- Less than (\<)
- Greater than or equal to (>=)
- Less than or equal to (\<=)

Example:
```python
x = 5
y = 10
print(x == y)  # Output: False
print(x != y)  # Output: True
print(x > y)   # Output: False
print(x < y)   # Output: True
print(x >= 5)  # Output: True
print(y <= 9)  # Output: False
```

Real-life use case: Checking eligibility for a discount
```python
purchase_amount = 120
discount_threshold = 100

if purchase_amount > discount_threshold:
    print("You're eligible for a 10% discount!")
else:
    print("Add more items to your cart for a discount.")
  ```

## Logical Operators:
These perform logical operations on boolean values.

- and: Returns True if both operands are True
- or: Returns True if at least one operand is True
- not: Reverses the boolean value

Example:
```python
a = True
b = False

print(a and b)  # Output: False
print(a or b)   # Output: True
print(not a)    # Output: False
```

Real-life use case: Checking login credentials
```python
username = "user123"
password = "pass456"

correct_username = "user123"
correct_password = "pass456"

if username == correct_username and password == correct_password:
    print("Login successful!")
else:
    print("Invalid username or password.")
```

## Assignment Operators:
These assign values to variables.

- = : Simple assignment
- += : Add and assign
- -= : Subtract and assign
- *= : Multiply and assign
- /= : Divide and assign
- //= : Floor divide and assign
- %= : Modulus and assign
- **= : Exponentiate and assign

Example:
```python
x = 10
x += 5  # Equivalent to x = x + 5
print(x)  # Output: 15

y = 20
y *= 2  # Equivalent to y = y * 2
print(y)  # Output: 40
```

Real-life use case: Updating a game score
```python
score = 0

# Player hits a target
score += 10

# Player completes a level
score *= 2

print(f"Current score: {score}")
```

## Identity Operators:
These compare the memory locations of two objects.

- is: Returns True if both operands refer to the same object
- is not: Returns True if the operands refer to different objects

Example:
```python
a = [1, 2, 3]
b = [1, 2, 3]
c = a

print(a is b)  # Output: False (different objects with same value)
print(a is c)  # Output: True (same object)
print(a is not b)  # Output: True
```

Real-life use case: Checking for a specific instance in a game
```python
class Enemy:
    pass

enemy1 = Enemy()
enemy2 = Enemy()
current_target = enemy1

if current_target is enemy1:
    print("Attacking the first enemy")
else:
    print("Attacking a different enemy")
```

## Membership Operators:
These test for membership in a sequence (like strings, lists, or tuples).

- in: Returns True if a value is found in the sequence
- not in: Returns True if a value is not found in the sequence

Example:
```python
fruits = ["apple", "banana", "cherry"]

print("banana" in fruits)  # Output: True
print("orange" not in fruits)  # Output: True
```

Real-life use case: Checking item availability
```python
inventory = ["shirt", "pants", "socks", "hat"]
customer_request = "shoes"

if customer_request in inventory:
    print(f"Yes, we have {customer_request} in stock.")
else:
    print(f"Sorry, we don't have {customer_request} at the moment.")
```

Understanding these operators and how to use them effectively is crucial for writing efficient and logical Python code. As you progress in your programming journey, you'll find yourself using these operators frequently in various combinations to solve complex problems and create sophisticated applications. 

We will be using them throughout this course so having a good understanding of them is necessary.