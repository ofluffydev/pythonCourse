---
title: "String Formatting"
sidebar_label: "String Formatting"
sidebar_position: 6
description: "Learn how to format strings in Python using the `format()` method and f-strings."
---

# Python String Formatting

String formatting in Python allows you to create complex strings with embedded values. This guide focuses on the `str.format()` method and f-strings, with a particular emphasis on format specifiers.

## Basic Syntax

1. Using `str.format()`:
   ```python
   "Hello, {}!".format("World") # 'Hello, World!'
   ```

2. Using f-strings (Python 3.6+):
   ```python
   name = "World"
   f"Hello, {name}!" # 'Hello, World!'
   ```

## Format Specifiers

Format specifiers follow this general syntax:
```
{[field_name]:[format_spec]}
```

Where `format_spec` follows this syntax:
```
[[fill]align][sign][#][0][width][grouping_option][.precision][type]
```

Let's break this down:

### Field Name

- Can be a number (positional argument) or a keyword (named argument).
- Example:
  ```python
  "{0} {1}".format("Hello", "World")
  "{greeting} {name}".format(greeting="Hello", name="World")
  ```

### Alignment and Padding

- `<`: Left-align (default for most objects)
- `>`: Right-align (default for numbers)
- `^`: Center-align
- `=`: Pad after the sign but before digits (for numbers)

You can specify a fill character before the align specifier:

```python
"{:*>10}".format("test")  # '******test'
"{:^10}".format("test")   # '   test   '
```

### Signs

- `+`: Show sign for both positive and negative numbers
- `-`: Show sign only for negative numbers (default)
- ` `: Use a leading space for positive numbers

```python
"{:+}".format(42)    # '+42'
"{:-}".format(42)    # '42'
"{: }".format(42)    # ' 42'
```

### `#` Option

Used with binary, octal, or hexadecimal output (types 'b', 'o', 'x', 'X') to include the prefix.

```python
"{:#b}".format(42)   # '0b101010'
"{:#o}".format(42)   # '0o52'
"{:#x}".format(42)   # '0x2a'
```

### Width and Precision

- Width: Minimum field width
- Precision: Number of decimal places for floats, max chars for strings

```python
"{:10}".format("test")     # 'test      '
"{:10.2f}".format(3.14159) # '      3.14'
```

### Grouping Option

- `,`: Use comma as thousand separator
- `_`: Use underscore as thousand separator

```python
"{:,}".format(1234567)  # '1,234,567'
"{:_}".format(1234567)  # '1_234_567'
```

### Type Specifiers

- `s`: String (default for strings)
- `d`: Decimal integer (default for integers)
- `f`: Fixed-point float (default for floats)
- `e` or `E`: Exponential notation
- `g` or `G`: General format (exponential for large numbers, fixed-point otherwise)
- `%`: Percentage (multiplies by 100 and adds %)
- `x` or `X`: Hexadecimal
- `o`: Octal
- `b`: Binary

Examples:
```python
"{:d}".format(42)    # '42'
"{:f}".format(3.14)  # '3.140000'
"{:.2f}".format(3.14)  # '3.14'
"{:e}".format(1000000)  # '1.000000e+06'
"{:%}".format(0.65)  # '65.000000%'
"{:x}".format(255)   # 'ff'
```

## Advanced Usage

### Nested Fields

You can nest fields for more complex formatting:

```python
person = {'name': 'Alice', 'age': 30}
"{p[name]} is {p[age]} years old".format(p=person)
```

### Accessing Object Attributes

You can access object attributes in your format strings:

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

p = Person("Bob", 35)
"{0.name} is {0.age} years old".format(p)
```

### Format Specifiers in f-strings

F-strings support all the same format specifiers:

```python
name = "Charlie"
age = 40
f"{name:>10} is {age:<3} years old"
```

### Combining Multiple Specifiers

You can combine multiple specifiers for complex formatting:

```python
number = 1234.5678
f"{number:,.2f}"  # '1,234.57'

percentage = 0.75
f"{percentage:.1%}"  # '75.0%'
```

## Common Pitfalls and Tips

1. Forgetting to double curly braces when you want to include literal curly braces:
   ```python
   "{{}}".format()  # '{}'
   ```

2. Using incompatible type specifiers:
   ```python
   "{:d}".format("not a number")  # ValueError
   ```

3. Remember that `.format()` returns a new string; it doesn't modify the original:
   ```python
   s = "Hello, {}!"
   s.format("World")  # This doesn't change s
   s = s.format("World")  # This assigns the new string to s
   ```

4. For very simple cases, don't overcomplicate:
   ```python
   # Simple is often better
   f"Hello, {name}!"
   # vs
   "Hello, {name:s}!".format(name=name)
   ```

Understanding these format specifiers allows for powerful and flexible string formatting in Python, enabling you to create precisely formatted output for a wide variety of use cases.