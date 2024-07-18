---
title: Instance Variables vs Class Variables
sidebar_position: 2
---
# Instance Variables vs. Class Variables

## Introduction

In Python, variables associated with classes can be categorized into two main types: instance variables and class variables. Understanding the difference between these two is crucial for effective object-oriented programming in Python.

## Instance Variables

Instance variables are unique to each instance (object) of a class. They are defined inside the class methods, typically in the `__init__` method, and are prefixed with `self.`.

### Key Characteristics:
1. Unique to each object
2. Defined inside methods using `self`
3. Can have different values for different objects of the same class

### Example:

```python
class Dog:
    def __init__(self, name, age):
        self.name = name  # Instance variable
        self.age = age    # Instance variable

dog1 = Dog("Buddy", 3)
dog2 = Dog("Max", 5)

print(dog1.name)  # Output: Buddy
print(dog2.name)  # Output: Max
```

In this example, `name` and `age` are instance variables. Each `Dog` object has its own `name` and `age`.

## Class Variables

Class variables are shared among all instances of a class. They are defined outside any method in the class and are not prefixed with `self.`.

### Key Characteristics:
1. Shared among all instances of the class
2. Defined outside methods, directly in the class
3. Can be accessed using the class name or through instances

### Example:

```python
class Cat:
    species = "Felis catus"  # Class variable

    def __init__(self, name):
        self.name = name  # Instance variable

cat1 = Cat("Whiskers")
cat2 = Cat("Mittens")

print(Cat.species)    # Output: Felis catus
print(cat1.species)   # Output: Felis catus
print(cat2.species)   # Output: Felis catus
```

In this example, `species` is a class variable shared by all `Cat` instances.

## Comparing Instance and Class Variables

Let's look at an example that uses both:

```python
class Student:
    school = "Python High"  # Class variable

    def __init__(self, name, grade):
        self.name = name    # Instance variable
        self.grade = grade  # Instance variable

    def display_info(self):
        print(f"{self.name} is in grade {self.grade} at {self.school}")

student1 = Student("Alice", 10)
student2 = Student("Bob", 11)

student1.display_info()  # Output: Alice is in grade 10 at Python High
student2.display_info()  # Output: Bob is in grade 11 at Python High

# Changing the class variable
Student.school = "Python University"

student1.display_info()  # Output: Alice is in grade 10 at Python University
student2.display_info()  # Output: Bob is in grade 11 at Python University
```

In this example:
- `name` and `grade` are instance variables, unique to each student.
- `school` is a class variable, shared among all students.

## When to Use Each

- Use instance variables when you need attributes that are unique to each object.
- Use class variables for attributes and methods that should be shared by all instances of the class.

## Potential Pitfall: Modifying Class Variables

Be cautious when modifying class variables through instances:

```python
class Example:
    class_var = []

    def add_item(self, item):
        self.class_var.append(item)

ex1 = Example()
ex2 = Example()

ex1.add_item(1)
print(ex1.class_var)  # Output: [1]
print(ex2.class_var)  # Output: [1]
print(Example.class_var)  # Output: [1]
```

Modifying a mutable class variable (like a list) affects all instances and the class itself.

## Conclusion

Understanding the difference between instance and class variables is crucial for effective Python programming:

- Instance variables: Unique to each object, defined with `self`
- Class variables: Shared among all instances, defined in the class body

Choose the appropriate type based on whether the data should be unique to each instance or shared among all instances of the class.