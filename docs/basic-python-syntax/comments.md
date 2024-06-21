---
title: "Comments in Python"
sidebar_label: "Comments"
sidebar_position: 3
---

Comments in Python are crucial for code readability, documentation, and collaboration. They allow you to explain your code, make notes for yourself or others, and temporarily disable code for testing purposes. Let's explore the different types of comments in Python, their uses, and best practices.

Note that comments are ignored by code interpreters/compilers.

Types of Comments in Python:

1. Single-line Comments:
These comments start with a '#' and continue until the end of the line.

Example:
```python
# This is a single-line comment
x = 5  # This comment is at the end of a line of code
```

Real-life use case: Explaining a variable's purpose
```python
# Store the user's age
user_age = 25

# Calculate the year of birth (assuming current year is 2024)
birth_year = 2024 - user_age  # This might need updating each year
```

2. Multi-line Comments:
Python doesn't have a specific syntax for multi-line comments, but we can use triple quotes (''' or """) to create string literals that function as multi-line comments.

Example:
```python
'''
This is a multi-line comment.
It can span several lines.
Python ignores string literals that are not assigned to a variable.
'''

"""
This is another way to write
a multi-line comment using
double quotes.
"""
```

Real-life use case: Documenting a function
```python
def calculate_bmi(weight, height):
    """
    Calculate the Body Mass Index (BMI) of a person.
    
    Parameters:
    weight (float): The person's weight in kilograms.
    height (float): The person's height in meters.
    
    Returns:
    float: The calculated BMI.
    """
    return weight / (height ** 2)
```

3. Inline Comments:
These are single-line comments placed on the same line as code.

Example:
```python
x = 5 + 3  # Adding two numbers
```

Real-life use case: Explaining a complex calculation
```python
total_cost = (base_price * quantity) + (shipping_fee * weight) - discount  # Calculate total including shipping and discount
```

Best Practices for Using Comments:

1. Use comments to explain 'why', not 'what':
The code itself should be clear enough to show what it's doing. Use comments to explain why you're doing something, especially if it's not immediately obvious.

```python
# Increase timeout to 30 seconds due to slow network conditions
timeout = 30
```

2. Keep comments up-to-date:
Outdated comments can be misleading. Always update comments when you change the corresponding code.

```python
# Old comment: Check if user is 18 or older
# New comment: Check if user is 21 or older (updated due to new regulations)
if user_age >= 21:
    allow_access()
```

3. Use comments for TODO notes:
Highlight areas that need future work or improvement. Most IDE's highlight the word TODO and will even make you a checklist for finishing TODO comments.

```python
# TODO: Implement error handling for network failures
api_response = make_api_call()
```

4. Comment out code for debugging:
Temporarily disable code sections for testing purposes.

```python
result = complex_calculation()
# print(f"Debug: Intermediate result = {result}")  # Commented out for production
```

5. Use docstrings for functions, classes, and modules:
Docstrings (triple-quoted strings) provide a standardized way to document code components.

```python
def validate_email(email):
    """
    Validate an email address.

    Args:
    email (str): The email address to validate.

    Returns:
    bool: True if the email is valid, False otherwise.
    """
    # Implementation here
```

6. Avoid over-commenting:
Don't state the obvious. Good code often speaks for itself.

```python
# Bad example:
# Increment i by 1
i += 1

# Good example (no comment needed for simple operations):
i += 1
```

7. Use comments to explain complex algorithms or logic:
When implementing complicated logic, a brief explanation can be very helpful.

```python
def quicksort(arr):
    """
    Implement the quicksort algorithm.
    
    This function uses the divide-and-conquer strategy:
    1. Choose a pivot element.
    2. Partition the array around the pivot.
    3. Recursively sort the sub-arrays.
    """
    # Implementation here
```

Comments are a powerful tool when used correctly. They can greatly enhance code readability and maintainability, making it easier for you and others to understand and work with the code in the future.