---
title: "Lists"
sidebar_position: 1
description: "Using lists in Python, including creation, manipulation, and common operations."
---

# Python Lists

## What are Lists?

Lists in Python are ordered, mutable sequences used to store collections of items. They can contain elements of different types, including other lists. Lists are defined by enclosing elements in square brackets `[]` and separating them with commas.

```python
my_list = [1, "hello", 3.14, [1, 2, 3]]
```

## Why Use Lists?

1. **Mutability**: Unlike tuples, lists can be modified after creation.
2. **Ordering**: Lists maintain the order of elements.
3. **Heterogeneous Data**: Lists can store different types of data in a single structure.
4. **Dynamic Sizing**: Lists can grow or shrink as needed.
5. **Rich Set of Methods**: Python provides many built-in methods for list manipulation.

## Creating Lists

```python
# Empty list
empty_list = []

# List with elements
numbers = [1, 2, 3, 4, 5]

# List with mixed types
mixed = [1, "two", 3.0, [4, 5]]

# List comprehension
squares = [x**2 for x in range(5)]

# Using the list() constructor
char_list = list("hello")
```

## Accessing List Elements

```python
my_list = [10, 20, 30, 40, 50]

# Indexing
print(my_list[1])  # Output: 20

# Negative indexing
print(my_list[-1])  # Output: 50

# Slicing
print(my_list[1:4])  # Output: [20, 30, 40]

# Stride
print(my_list[::2])  # Output: [10, 30, 50]
```

## List Methods

1. `append(x)`: Add an item to the end of the list.
   ```python
   my_list.append(60)
   ```

2. `extend(iterable)`: Extend the list by appending elements from the iterable.
   ```python
   my_list.extend([70, 80])
   ```

3. `insert(i, x)`: Insert an item at a given position.
   ```python
   my_list.insert(1, 15)
   ```

4. `remove(x)`: Remove the first item from the list whose value is x.
   ```python
   my_list.remove(30)
   ```

5. `pop([i])`: Remove the item at the given position and return it. If no index is specified, removes and returns the last item.
   ```python
   popped = my_list.pop()
   ```

6. `clear()`: Remove all items from the list.
   ```python
   my_list.clear()
   ```

7. `index(x[, start[, end]])`: Return the index of the first occurrence of x.
   ```python
   index = my_list.index(30)
   ```

8. `count(x)`: Return the number of times x appears in the list.
   ```python
   count = my_list.count(20)
   ```

9. `sort(*, key=None, reverse=False)`: Sort the list in place.
   ```python
   my_list.sort(reverse=True)
   ```

10. `reverse()`: Reverse the elements of the list in place.
    ```python
    my_list.reverse()
    ```

11. `copy()`: Return a shallow copy of the list.
    ```python
    new_list = my_list.copy()
    ```

## List Operations

1. Concatenation
   ```python
   list1 = [1, 2]
   list2 = [3, 4]
   result = list1 + list2  # [1, 2, 3, 4]
   ```

2. Repetition
   ```python
   list1 = [1, 2]
   result = list1 * 3  # [1, 2, 1, 2, 1, 2]
   ```

3. Membership testing
   ```python
   print(2 in [1, 2, 3])  # True
   ```

4. Iteration
   ```python
   for item in [1, 2, 3]:
       print(item)
   ```

## List Comprehensions

List comprehensions provide a concise way to create lists based on existing lists or other iterables.

```python
# Basic list comprehension
squares = [x**2 for x in range(10)]

# With condition
even_squares = [x**2 for x in range(10) if x % 2 == 0]

# Nested list comprehension
matrix = [[i*j for j in range(5)] for i in range(5)]
```

## Common Use Cases for Lists

1. **Storing Collections of Data**
   ```python
   fruits = ["apple", "banana", "cherry"]
   ```

2. **Implementing Stacks and Queues**
   ```python
   # Stack
   stack = []
   stack.append("a")  # push
   stack.pop()  # pop

   # Queue
   from collections import deque
   queue = deque(["a", "b", "c"])
   queue.append("d")  # enqueue
   queue.popleft()  # dequeue
   ```

3. **Storing Heterogeneous Data**
   ```python
   person = ["Alice", 30, ["Python", "Java"], True]
   ```

4. **Temporary Storage in Algorithms**
   ```python
   def bubble_sort(arr):
       n = len(arr)
       for i in range(n):
           for j in range(0, n-i-1):
               if arr[j] > arr[j+1]:
                   arr[j], arr[j+1] = arr[j+1], arr[j]
   ```

5. **Data Processing**
   ```python
   numbers = [1, 2, 3, 4, 5]
   squared = [x**2 for x in numbers]
   ```

## Best Practices and Tips

1. Use list comprehensions for simple list creation and transformation.
2. Prefer `enumerate()` for getting both index and value in loops.
3. Use `reversed()` instead of `reverse()` if you don't need to modify the original list.
4. Use `sorted()` instead of `sort()` if you want to keep the original list unchanged.
5. Be cautious with large lists as they can consume significant memory.
6. Use `collections.deque` for efficient insertion and deletion at both ends.

## Common Pitfalls

1. **Modifying a List While Iterating Over It**
   ```python
   # This can lead to unexpected results
   my_list = [1, 2, 3, 4, 5]
   for item in my_list:
       if item == 3:
           my_list.remove(item)
   ```

2. **Unexpected Behavior with Shallow Copies**
   ```python
   original = [1, [2, 3], 4]
   shallow_copy = original.copy()
   shallow_copy[1][0] = 5  # This also modifies original
   ```

3. **Creating Lists of Lists Incorrectly**
   ```python
   # This creates a list of references to the same inner list
   wrong = [[0] * 3] * 3

   # Correct way
   correct = [[0 for _ in range(3)] for _ in range(3)]
   ```

4. **Comparing Lists**
   ```python
   # This compares list identity, not contents
   if list1 is list2:
       print("Same list")

   # Correct way to compare contents
   if list1 == list2:
       print("Same contents")
   ```

Understanding lists and their appropriate use cases is crucial for effective Python programming. Their flexibility and rich set of operations make them one of the most commonly used data structures in Python.