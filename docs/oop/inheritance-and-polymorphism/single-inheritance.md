---
title: Single Inheritance
sidebar_position: 1
---
# Single Inheritance

## Introduction

Single inheritance is a fundamental concept in object-oriented programming (OOP) that allows a class to inherit attributes and methods from a single parent class. This mechanism promotes code reuse and helps in creating a hierarchical structure of classes. In Python, single inheritance is straightforward to implement and widely used.

## Basic Syntax

The basic syntax for single inheritance in Python is:

```python
class ParentClass:
    # Parent class code

class ChildClass(ParentClass):
    # Child class code
```

The child class is defined by putting the name of the parent class in parentheses after the child class name.

## Example: Animal Hierarchy

Let's explore single inheritance with a simple animal hierarchy:

```python
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

# Usage
dog = Dog("Buddy")
cat = Cat("Whiskers")

print(dog.speak())  # Output: Buddy says Woof!
print(cat.speak())  # Output: Whiskers says Meow!
```

In this example:
- `Animal` is the parent class.
- `Dog` and `Cat` are child classes that inherit from `Animal`.
- The `speak` method is overridden in each child class.

## Inheriting and Extending Methods

Child classes can inherit methods from their parent class and can also extend or override them:

```python
class Vehicle:
    def __init__(self, brand):
        self.brand = brand

    def start(self):
        return f"The {self.brand} vehicle is starting."

class Car(Vehicle):
    def __init__(self, brand, model):
        super().__init__(brand)
        self.model = model

    def start(self):
        return f"{super().start()} It's a {self.model} model."

# Usage
vehicle = Vehicle("Generic")
car = Car("Toyota", "Corolla")

print(vehicle.start())  # Output: The Generic vehicle is starting.
print(car.start())      # Output: The Toyota vehicle is starting. It's a Corolla model.
```

Key points:
- `super()` is used to call methods from the parent class.
- The `__init__` method of `Car` extends the parent's `__init__` method.
- The `start` method in `Car` overrides and extends the parent's `start` method.

## Accessing Parent Class Attributes

Child classes can access attributes defined in the parent class:

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduce(self):
        return f"My name is {self.name} and I'm {self.age} years old."

class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)
        self.student_id = student_id

    def introduce(self):
        return f"{super().introduce()} My student ID is {self.student_id}."

# Usage
person = Person("Alice", 30)
student = Student("Bob", 20, "S12345")

print(person.introduce())   # Output: My name is Alice and I'm 30 years old.
print(student.introduce())  # Output: My name is Bob and I'm 20 years old. My student ID is S12345.
```

## Method Resolution Order (MRO)

Python uses the Method Resolution Order (MRO) to determine the order in which it searches for methods and attributes in the inheritance hierarchy. For single inheritance, this is straightforward:

```python
class A:
    def method(self):
        return "Method from A"

class B(A):
    pass

class C(B):
    pass

print(C.mro())  # Output: [<class '__main__.C'>, <class '__main__.B'>, <class '__main__.A'>, <class 'object'>]
```

The MRO shows the order in which Python will look for methods: first in `C`, then in `B`, then in `A`, and finally in `object` (the base class for all Python classes).

## Best Practices

1. **Use Inheritance Judiciously**: Inherit only when there's a clear "is-a" relationship between classes.
2. **Favor Composition Over Inheritance**: When possible, use composition (has-a relationship) instead of inheritance for more flexible designs.
3. **Keep the Hierarchy Simple**: Deep inheritance hierarchies can become complex and hard to maintain.
4. **Use `super()` Correctly**: Always use `super()` when calling methods from the parent class to ensure proper method resolution.
5. **Document the Inheritance**: Clearly document the purpose and expectations of inherited methods and attributes.

## Conclusion

Single inheritance in Python is a powerful tool for creating hierarchical structures of classes, promoting code reuse, and implementing polymorphism. By understanding how to properly use inheritance, including method overriding and the use of `super()`, you can create more organized, efficient, and maintainable code. Remember to use inheritance judiciously and always consider whether composition might be a better alternative for your specific use case.