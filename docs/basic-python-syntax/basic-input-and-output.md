---
title: "Basic Input and Output in Python"
sidebar_label: "Basic Input and Output"
sidebar_position: 5
---

# Introduction
Input and output (I/O) operations are fundamental in programming. They allow your program to interact with the user, receive data, and display results. In Python, we have simple and powerful tools for handling I/O operations.

Why we use I/O:
1. To get information from the user
2. To display results or messages to the user
3. To create interactive programs
4. To read from or write to files (advanced topic)

Basic Output: print() function

The print() function is used to display output to the console.

How it works:
- It takes one or more arguments and displays them on the screen.
- It automatically adds a newline at the end of the output.

Examples:

1. Simple output:
```python
print("Hello, World!")
# Output: Hello, World!
```

2. Multiple arguments:
```python
name = "Alice"
age = 30
print("My name is", name, "and I am", age, "years old.")
# Output: My name is Alice and I am 30 years old.
```

3. Formatting output:
```python
price = 19.99
print(f"The price is ${price:.2f}")
# Output: The price is $19.99
```

Explanation:
- In example 1, we simply print a string.
- In example 2, we use multiple arguments in print(). Python automatically adds spaces between them.
- In example 3, we use an f-string (formatted string literal) to embed the value of 'price' in the string, formatting it to two decimal places.

# Basic Input: input() function

The input() function is used to get input from the user through the console.

How it works:
- It displays a prompt (optional) and waits for the user to enter data and press Enter.
- It always returns a string.

Examples:

1. Simple input:
```python
name = input("Enter your name: ")
print(f"Hello, {name}!")
# Prompt: Enter your name: Alice
# Output: Hello, Alice!
```

2. Numeric input:
```python
age = input("Enter your age: ")
age = int(age)  # Convert string to integer
years_to_100 = 100 - age
print(f"You will be 100 in {years_to_100} years.")
# Prompt: Enter your age: 30
# Output: You will be 100 in 70 years.
```

3. Multiple inputs:
```python
first_name = input("Enter your first name: ")
last_name = input("Enter your last name: ")
print(f"Your full name is {first_name} {last_name}.")
# Prompt: Enter your first name: John
# Prompt: Enter your last name: Doe
# Output: Your full name is John Doe.
```

Explanation:
- In example 1, we use input() to get a string from the user and then use it in our output.
- In example 2, we get a numeric input. Note that we need to convert it to an integer using int() because input() always returns a string.
- In example 3, we get multiple inputs from the user and combine them in our output.

Practice Exercise:
Create a simple calculator that asks the user for two numbers and an operation (+, -, *, /), then performs the calculation and displays the result.

```python
# Get input from the user
num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))
operation = input("Enter the operation (+, -, *, /): ")

# Perform the calculation
if operation == "+":
    result = num1 + num2
elif operation == "-":
    result = num1 - num2
elif operation == "*":
    result = num1 * num2
elif operation == "/":
    if num2 != 0:
        result = num1 / num2
    else:
        result = "Error: Division by zero"
else:
    result = "Error: Invalid operation"

# Display the result
print(f"The result is: {result}")
```

This exercise combines both input and output operations and introduces some basic control flow (if-elif-else statements) to create a functional program.

Here's a list of challenges for you to try on your own, focusing on basic input and output in Python:

Challenges:

1. Temperature Converter: Create a program that converts temperatures between Fahrenheit and Celsius. Ask the user for the temperature and the unit they're converting from, then display the result in the other unit.

2. Simple Quiz Game: Develop a short quiz game that asks the user multiple-choice questions. Keep track of their score and display it at the end.

3. Mad Libs Generator: Make a program that asks the user to input various words (nouns, verbs, adjectives, etc.) and then uses those words to fill in the blanks of a pre-written story. Display the completed story to the user.

4. Tip Calculator: Write a program that calculates the appropriate tip for a restaurant bill. Ask the user for the bill amount and the desired tip percentage, then display the tip amount and total bill.

5. Basic Login System: Create a simple login system that asks for a username and password. Compare the input to pre-set values and display whether the login was successful or not.

6. Number Guessing Game: Develop a game where the computer thinks of a random number, and the user tries to guess it. Provide hints like "too high" or "too low" after each guess.

7. Personal Information Formatter: Ask the user for their personal information (name, age, city, etc.) and then display it back in a formatted manner, like a simple profile or ID card.

8. Simple To-Do List: Create a basic to-do list where users can add tasks, view their current list, and mark tasks as complete.

**Note**: We're excited to announce that this website will soon feature the ability to run Python code directly in your browser! This upcoming feature will allow you to work on these challenges right here on the site, making it even easier to practice and improve your Python skills. Stay tuned for this exciting update!