---
title: "Class Definition and Instantiation"
sidebar_position: 1
---

# Class Definition and Instantiation

## Introduction

In object-oriented programming, a class is like a blueprint or a cookie cutter for creating objects. Just as a blueprint defines the structure and features of a building, a class defines the attributes and behaviors that the objects of that class will have. In this lesson, we'll explore how to define a class and create instances (objects) of that class in Python.

## Defining a Class

To define a class in Python, we use the `class` keyword followed by the class name. By convention, class names in Python use CamelCase notation.

```python
class Car:
    pass
```

This creates a simple class named `Car` with no attributes or methods. It's like drawing the outline of a car on a piece of paper – we've defined what it is, but we haven't added any details yet.

## Adding Attributes and Methods

Let's add some attributes and methods to our `Car` class:

```python
class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
        self.odometer = 0
    
    def drive(self, miles):
        self.odometer += miles
    
    def get_info(self):
        return f"{self.year} {self.make} {self.model}, {self.odometer} miles"
```

Let's break this down:

1. `__init__` is a special method called a constructor. It's like the birth of a car – it sets up the initial state of the object.
    - `self` refers to the instance being created. It's like the car saying "my make is..., my model is..., etc."
    - The parameters `make`, `model`, and `year` are like the specifications we give when ordering a car.
    - `self.odometer = 0` is setting an initial value, like a new car starting with 0 miles on the odometer.

2. `drive` is a method that simulates driving the car. It's an action the car can perform.
    - The `miles` parameter is how far we're driving.
    - `self.odometer += miles` is updating the car's state, like the odometer in a real car ticking up as we drive.

3. `get_info` is a method that returns information about the car, similar to reading the details off a car's registration.

## Instantiating a Class

To create an instance (object) of a class, we call the class as if it were a function:

```python
my_car = Car("Toyota", "Corolla", 2022)
```

This is like using our car blueprint to manufacture an actual car. We've taken the `Car` class (our blueprint) and created a specific car (an object) with defined make, model, and year.

## Using Class Methods and Attributes

Now that we have our car object, we can use its methods and access its attributes:

```python
print(my_car.get_info())  # Output: 2022 Toyota Corolla, 0 miles
my_car.drive(100)
print(my_car.get_info())  # Output: 2022 Toyota Corolla, 100 miles
```

This is like taking our newly manufactured car for a spin and then checking its details. We're interacting with our object just like we would with a real car – driving it and then checking its information.

## Multiple Instances

We can create multiple instances of the same class, each with its own set of attribute values:

```python
car1 = Car("Honda", "Civic", 2023)
car2 = Car("Ford", "Mustang", 2021)

car1.drive(50)
car2.drive(200)

print(car1.get_info())  # Output: 2023 Honda Civic, 50 miles
print(car2.get_info())  # Output: 2021 Ford Mustang, 200 miles
```

This is like a car factory producing different models of cars. Each car is built using the same blueprint (class), but they're separate objects with their own characteristics and states.

## Real-World Use Cases

1. **Inventory Management System**:
   A retail store might use a `Product` class to manage its inventory:

   ```python
   class Product:
       def __init__(self, name, price, stock):
           self.name = name
           self.price = price
           self.stock = stock

       def restock(self, quantity):
           self.stock += quantity

       def sell(self, quantity):
           if self.stock >= quantity:
               self.stock -= quantity
               return quantity * self.price
           else:
               return "Not enough stock"

   # Usage
   laptop = Product("Laptop", 999.99, 10)
   laptop.sell(2)  # Sells 2 laptops
   laptop.restock(5)  # Restocks 5 laptops
   ```

2. **Banking System**:
   A bank might use an `Account` class to manage customer accounts:

   ```python
   class Account:
       def __init__(self, account_number, holder_name, balance=0):
           self.account_number = account_number
           self.holder_name = holder_name
           self.balance = balance

       def deposit(self, amount):
           self.balance += amount

       def withdraw(self, amount):
           if self.balance >= amount:
               self.balance -= amount
               return amount
           else:
               return "Insufficient funds"

   # Usage
   alice_account = Account("123456", "Alice Johnson", 1000)
   alice_account.deposit(500)
   alice_account.withdraw(200)
   ```

3. **Game Development**:
   In a game, you might have a `Character` class:

   ```python
   class Character:
       def __init__(self, name, health, strength):
           self.name = name
           self.health = health
           self.strength = strength

       def attack(self, target):
           damage = self.strength
           target.receive_damage(damage)

       def receive_damage(self, damage):
           self.health -= damage
           if self.health <= 0:
               print(f"{self.name} has been defeated!")

   # Usage
   hero = Character("Hero", 100, 15)
   enemy = Character("Enemy", 50, 10)
   hero.attack(enemy)
   ```

These real-world examples demonstrate how classes can be used to model complex systems and entities, providing a structured way to represent data and behaviors in various applications.