---
title: "Instance Methods, Class Methods, and Static Methods"
sidebar_position: 2
---

# Instance Methods, Class Methods, and Static Methods in Python

## Introduction

In Python, classes can have three types of methods: instance methods, class methods, and static methods. Each type serves a specific purpose and has unique characteristics. Understanding these differences is crucial for writing efficient and organized object-oriented code.

## Instance Methods

Instance methods are the most common type of methods in Python classes. They are bound to the instance of the class and can access and modify the instance's state.

### Characteristics:

- First parameter is always `self`, which refers to the instance.
- Can access and modify instance attributes.
- Can access class attributes via `self.__class__`.

### Analogy:

Think of a car's methods. Each car (instance) has its own set of actions it can perform, like accelerate, brake, or turn. These actions are specific to each car and can affect its state (speed, direction).

### Example:

```python
class Car:
    def __init__(self, make, model):
        self.make = make
        self.model = model
        self.speed = 0

    def accelerate(self, increase):
        self.speed += increase
        print(f"{self.make} {self.model} is now going {self.speed} mph")

# Usage
my_car = Car("Toyota", "Corolla")
my_car.accelerate(20)  # Output: Toyota Corolla is now going 20 mph
```

In this example, `accelerate` is an instance method. It affects the `speed` of a specific car instance.

## Class Methods

Class methods are bound to the class rather than its instances. They can't access or modify instance state, but they can modify class state that applies across all instances of the class.

### Characteristics:

- Defined using the `@classmethod` decorator.
- First parameter is always `cls`, which refers to the class itself.
- Can access and modify class attributes, but not instance attributes.
- Can be called on the class itself, not just on instances.

### Analogy:

Imagine a car factory. Class methods are like factory-wide operations that affect all cars produced, such as changing the standard features for all new cars of a certain model.

### Example:

```python
class CarFactory:
    total_cars = 0

    def __init__(self, make, model):
        self.make = make
        self.model = model
        CarFactory.total_cars += 1

    @classmethod
    def report_total_cars(cls):
        print(f"Total cars produced: {cls.total_cars}")

    @classmethod
    def change_total_cars(cls, new_total):
        cls.total_cars = new_total

# Usage
car1 = CarFactory("Toyota", "Corolla")
car2 = CarFactory("Honda", "Civic")
CarFactory.report_total_cars()  # Output: Total cars produced: 2
CarFactory.change_total_cars(10)
CarFactory.report_total_cars()  # Output: Total cars produced: 10
```

Here, `report_total_cars` and `change_total_cars` are class methods. They operate on the class attribute `total_cars`, which is shared across all instances.

## Static Methods

Static methods are methods that have no access to either instance or class attributes. They are essentially regular functions that are included in the class because they have some logical connection with the class.

### Characteristics:

- Defined using the `@staticmethod` decorator.
- Don't have access to `self` or `cls`.
- Can't access or modify instance or class state.
- Can be called on the class or on instances.

### Analogy:

Think of static methods as utility functions related to the class. For a car, this might be a method to convert between miles per hour and kilometers per hour. It's related to cars but doesn't need to know anything about a specific car or the car class itself.

### Example:

```python
class MathOperations:
    @staticmethod
    def add(x, y):
        return x + y

    @staticmethod
    def multiply(x, y):
        return x * y

# Usage
print(MathOperations.add(5, 3))       # Output: 8
print(MathOperations.multiply(4, 2))  # Output: 8

# Can also be called on an instance, but it's not common
math_ops = MathOperations()
print(math_ops.add(2, 2))  # Output: 4
```

In this example, `add` and `multiply` are static methods. They perform operations related to the `MathOperations` class but don't need access to instance or class attributes.

## Real-World Use Cases

1. **E-commerce System**:

```python
class Product:
    all_products = []

    def __init__(self, name, price):
        self.name = name
        self.price = price
        Product.all_products.append(self)

    def apply_discount(self, discount):
        self.price *= (1 - discount)

    @classmethod
    def bulk_discount(cls, discount):
        for product in cls.all_products:
            product.apply_discount(discount)

    @staticmethod
    def is_valid_price(price):
        return price > 0

# Usage
Product("Laptop", 1000)
Product("Phone", 500)
Product.bulk_discount(0.1)  # Apply 10% discount to all products
```

2. **User Authentication System**:

```python
import hashlib
from datetime import datetime, timedelta

class User:
    def __init__(self, username, password):
        self.username = username
        self.password_hash = self._hash_password(password)
        self.last_login = None

    def login(self, password):
        if self._hash_password(password) == self.password_hash:
            self.last_login = datetime.now()
            return True
        return False

    @classmethod
    def create_admin(cls, username, password):
        admin = cls(username, password)
        admin.is_admin = True
        return admin

    @staticmethod
    def _hash_password(password):
        return hashlib.sha256(password.encode()).hexdigest()

    @staticmethod
    def is_strong_password(password):
        return len(password) >= 8 and any(c.isdigit() for c in password)

# Usage
user = User("alice", "password123")
admin = User.create_admin("admin", "adminpass")
User.is_strong_password("weak")  # Returns False
```

3. **Data Analysis Tool**:

```python
import numpy as np

class DataAnalyzer:
    def __init__(self, data):
        self.data = np.array(data)

    def get_mean(self):
        return np.mean(self.data)

    @classmethod
    def from_csv(cls, filename):
        data = np.genfromtxt(filename, delimiter=',')
        return cls(data)

    @staticmethod
    def correlation(x, y):
        return np.corrcoef(x, y)[0, 1]

# Usage
analyzer = DataAnalyzer([1, 2, 3, 4, 5])
print(analyzer.get_mean())  # Instance method

csv_analyzer = DataAnalyzer.from_csv('data.csv')  # Class method

x = [1, 2, 3, 4]
y = [2, 3, 4, 5]
print(DataAnalyzer.correlation(x, y))  # Static method
```

These examples demonstrate how instance methods, class methods, and static methods can be used in real-world scenarios to create more organized and efficient code structures.