---
title: "Dictionaries"
description: "Learn about dictionaries in Python, a collection type that allows you to store key-value pairs."
sidebar_position: 4
---
# Python Dictionaries

## Introduction to Dictionaries

Dictionaries in Python are versatile data structures that store key-value pairs. They are defined using curly braces `{}` and are sometimes called associative arrays, hash tables, or hash maps in other programming languages.

## Dictionary Syntax

The basic syntax for a dictionary is:

```python
my_dict = {key1: value1, key2: value2, ...}
```

- Keys and values are separated by colons `:`.
- Key-value pairs (also called items) are separated by commas `,`.
- The entire dictionary is enclosed in curly braces `{}`.

Example:
```python
person = {"name": "Alice", "age": 30, "city": "New York"}
```

## Creating Dictionaries

There are several ways to create dictionaries, each with its own syntax:

1. Using curly braces:
   ```python
   empty_dict = {}
   person = {"name": "Bob", "age": 25, "job": "Developer"}
   ```

2. Using the `dict()` constructor:
   ```python
   another_person = dict(name="Charlie", age=35, job="Designer")
   ```

3. From a list of tuples:
   ```python
   items = [("a", 1), ("b", 2), ("c", 3)]
   dict_from_tuples = dict(items)
   ```

4. Using dict comprehension:
   ```python
   squares = {x: x**2 for x in range(5)}
   ```

## Accessing and Modifying Dictionaries

### Accessing Values

To access a value, use square brackets `[]` with the key:

```python
person = {"name": "Alice", "age": 30}
print(person["name"])  # Output: Alice
```

Alternatively, use the `get()` method:

```python
age = person.get("age")  # Returns 30
unknown = person.get("unknown", "Not found")  # Returns "Not found"
```

### Modifying Values

Assign a new value to an existing key:

```python
person["age"] = 31
```

### Adding New Key-Value Pairs

Assign a value to a new key:

```python
person["job"] = "Engineer"
```

### Removing Key-Value Pairs

Use the `del` keyword:

```python
del person["age"]
```

## Dictionary Methods in Detail

Let's explore the most important dictionary methods and their syntax:

### 1. `clear()`

Syntax: `dict.clear()`

```python
person.clear()
```

### 2. `copy()`

Syntax: `new_dict = dict.copy()`

```python
new_person = person.copy()
```

### 3. `get(key[, default])`

Syntax: `value = dict.get(key[, default])`

```python
age = person.get("age", 0)
```

### 4. `items()`

Syntax: `dict.items()`

```python
for key, value in person.items():
    print(f"{key}: {value}")
```

### 5. `keys()`

Syntax: `dict.keys()`

```python
keys_list = list(person.keys())
```

### 6. `values()`

Syntax: `dict.values()`

```python
values_list = list(person.values())
```

### 7. `pop(key[, default])`

Syntax: `value = dict.pop(key[, default])`

```python
age = person.pop("age", 0)
```

### 8. `popitem()`

Syntax: `key, value = dict.popitem()`

```python
last_item = person.popitem()
```

### 9. `setdefault(key[, default])`

Syntax: `value = dict.setdefault(key[, default])`

```python
gender = person.setdefault("gender", "Unknown")
```

### 10. `update([other])`

Syntax: `dict.update([other])`

```python
person.update({"age": 32, "city": "San Francisco"})
```

## Advanced Dictionary Concepts

### Dictionary Comprehensions

Syntax: `{key_expression: value_expression for item in iterable}`

```python
squares = {x: x**2 for x in range(6)}
```

### Nested Dictionaries

Dictionaries can contain other dictionaries as values:

```python
person = {
    "name": "Alice",
    "age": 30,
    "address": {
        "street": "123 Main St",
        "city": "Anytown",
        "zip": "12345"
    }
}
```

Accessing nested values:

```python
city = person["address"]["city"]
```

## Common Use Cases for Dictionaries

1. **Storing Structured Data**:
   ```python
   user_profile = {
       "username": "alice_wonder",
       "email": "alice@example.com",
       "preferences": {"theme": "dark", "notifications": True}
   }
   ```

2. **Counting Occurrences**:
   ```python
   words = ["apple", "banana", "apple", "cherry"]
   word_count = {}
   for word in words:
       word_count[word] = word_count.get(word, 0) + 1
   ```

3. **Grouping/Categorizing Data**:
   ```python
   students = [
       {"name": "Alice", "grade": "A"},
       {"name": "Bob", "grade": "B"},
       {"name": "Charlie", "grade": "A"}
   ]
   grade_groups = {}
   for student in students:
       grade_groups.setdefault(student["grade"], []).append(student["name"])
   ```

## Best Practices and Tips

1. Use `dict.get()` or `dict.setdefault()` to provide default values for missing keys.
2. Use the `in` operator to check for key existence:
   ```python
   if "name" in person:
       print(person["name"])
   ```
3. Remember that as of Python 3.7, dictionaries maintain insertion order.
4. For complex default values, consider using `collections.defaultdict`:
   ```python
   from collections import defaultdict
   int_dict = defaultdict(int)
   int_dict["key"] += 1  # No KeyError, defaults to 0 and then adds 1
   ```

## Common Pitfalls to Avoid

1. **Modifying a Dictionary While Iterating**:
   Instead of:
   ```python
   for key in my_dict:
       if some_condition:
           del my_dict[key]  # Can raise RuntimeError
   ```
   Use:
   ```python
   my_dict = {k: v for k, v in my_dict.items() if not some_condition}
   ```

2. **Using Mutable Objects as Keys**:
   ```python
   my_dict = {[1, 2, 3]: "value"}  # Raises TypeError
   ```
   Instead, use immutable types like tuples:
   ```python
   my_dict = {(1, 2, 3): "value"}
   ```

3. **KeyError When Accessing Non-existent Keys**:
   Instead of:
   ```python
   value = my_dict["non_existent_key"]  # Raises KeyError
   ```
   Use:
   ```python
   value = my_dict.get("non_existent_key", default_value)
   ```

## Conclusion

Understanding the syntax and operations of dictionaries is crucial for effective Python programming. Dictionaries offer a powerful way to store and retrieve data using meaningful keys. By mastering the syntax and methods associated with dictionaries, you can write more efficient and expressive code. Practice using dictionaries in different scenarios to become proficient in leveraging their full potential in your Python programs.