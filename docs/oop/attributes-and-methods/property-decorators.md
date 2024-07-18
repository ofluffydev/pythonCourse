---
title: Property decorators (getters, setters, deleters)
sidebar_position: 2
sidebar_label: Property Decorators
---
# Property Decorators (Getters, Setters, Deleters)

## Introduction

Property decorators in Python provide a way to customize access to instance attributes. They allow you to define methods that behave like attributes, enabling you to implement getters, setters, and deleters. This powerful feature enhances encapsulation and gives you more control over attribute access.

You will begin to see these more and more as you work with Python classes, so it's essential to understand how they work and how to use them effectively.

## The `@property` Decorator

The `@property` decorator is used to define a getter method, allowing you to access a method as if it were an attribute.

### Basic Usage:

```python
class Circle:
    def __init__(self, radius):
        self._radius = radius

    @property
    def radius(self):
        return self._radius

circle = Circle(5)
print(circle.radius)  # Output: 5
```

In this example, `radius` is accessed like an attribute, but it's actually calling the `radius` method.

## Getter, Setter, and Deleter

You can define getter, setter, and deleter methods for a property:

- Getter: Retrieves the value of the property
- Setter: Sets the value of the property
- Deleter: Deletes the property

### Example:

```python
class Temperature:
    def __init__(self, celsius):
        self._celsius = celsius

    @property
    def celsius(self):
        return self._celsius

    @celsius.setter
    def celsius(self, value):
        if value < -273.15:
            raise ValueError("Temperature below absolute zero is not possible")
        self._celsius = value

    @celsius.deleter
    def celsius(self):
        print("Deleting temperature value")
        del self._celsius

    @property
    def fahrenheit(self):
        return (self.celsius * 9/5) + 32

# Usage
temp = Temperature(25)
print(temp.celsius)     # Output: 25
print(temp.fahrenheit)  # Output: 77.0

temp.celsius = 30
print(temp.celsius)     # Output: 30

del temp.celsius        # Output: Deleting temperature value

# This will raise an AttributeError
# print(temp.celsius)
```

In this example:
- `celsius` is a property with getter, setter, and deleter methods.
- `fahrenheit` is a read-only property (only has a getter).

## Benefits of Using Properties

1. **Encapsulation**: You can use properties to control access to internal attributes.
2. **Validation**: Setters allow you to validate or modify data before assigning it.
3. **Computed Attributes**: You can create attributes that are calculated on-the-fly.
4. **Backward Compatibility**: You can start with public attributes and later add properties without changing the interface.

## Advanced Usage: Property Factory

You can also create properties using the `property()` function:

```python
class Person:
    def __init__(self, name):
        self._name = name

    def get_name(self):
        return self._name

    def set_name(self, value):
        if not isinstance(value, str):
            raise TypeError("Name must be a string")
        self._name = value

    def del_name(self):
        del self._name

    name = property(get_name, set_name, del_name, "Person's name")

# Usage
p = Person("Alice")
print(p.name)  # Output: Alice
p.name = "Bob"
print(p.name)  # Output: Bob
del p.name
# print(p.name)  # This would raise an AttributeError
```

This approach is equivalent to using decorators but allows you to define the property in one line.

## Best Practices

1. **Use Single Underscore for "Private" Attributes**: By convention, prefix internal attributes with a single underscore (e.g., `self._radius`).
2. **Avoid Getter/Setter Pairs**: If you're just getting and setting a value without any additional logic, use a public attribute instead.
3. **Use Properties for Computed Values**: Properties are great for attributes that need to be calculated.
4. **Keep It Simple**: Don't overuse properties. Use them when you need to add behavior to attribute access.

## Conclusion

Property decorators in Python provide a clean and pythonic way to implement getters, setters, and deleters. They allow you to control attribute access, add validation, and create computed properties, all while maintaining a simple and intuitive interface for users of your classes.

By using properties, you can write more robust and maintainable code, adhering to the principle of encapsulation without sacrificing the simplicity and readability that Python is known for.