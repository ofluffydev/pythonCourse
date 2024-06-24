---
title: "Dynamic vs Inferred vs Static Typing"
description: "Learn about the differences between dynamic, inferred, and static typing in programming languages."
---

Dynamic vs Inferred vs Static Typing
---------------------------------------

In programming languages, type systems define how variables and expressions are classified into data types. The three main categories of typing are dynamic typing, inferred typing, and static typing. Let's explore each of these concepts and their characteristics.

1. Dynamic Typing:
   - In dynamically-typed languages, variable types are determined at runtime.
   - Variables can hold values of any type, and the type can change during program execution.
   - The type of a variable is not explicitly declared; instead, it is inferred based on the value assigned to it.
   - Examples of dynamically-typed languages include Python, JavaScript, Ruby, and PHP.
   - Advantages:
     - Dynamic typing offers flexibility and allows for rapid development.
     - It enables duck typing, where the suitability of an object is determined by its methods and properties rather than its type.
     - Dynamic typing can make code more concise and readable.
   - Disadvantages:
     - Type errors may not be caught until runtime, leading to potential bugs and runtime exceptions.
     - The lack of static type checking can make it harder to catch type-related issues during development.
     - Performance may be impacted since type checks occur at runtime.

2. Inferred Typing:
   - In languages with inferred typing (also known as type inference), the compiler or interpreter deduces the types of variables based on their usage and the values assigned to them.
   - The developer does not need to explicitly specify the types of variables; instead, the language's type system infers the types automatically.
   - Examples of languages with inferred typing include Haskell, ML, and some modern languages like Swift and Kotlin.
   - Advantages:
     - Inferred typing provides the benefits of static typing without the need for explicit type annotations.
     - It can make code more concise and readable by reducing the amount of type-related code.
     - Type inference can catch type-related errors at compile-time, providing early feedback.
   - Disadvantages:
     - Inferred types may not always be obvious, especially in complex codebases, making the code harder to understand.
     - In some cases, the inferred types may not match the developer's intentions, leading to unexpected behavior.

3. Static Typing:
   - In statically-typed languages, variable types are explicitly declared and checked at compile-time.
   - The type of a variable is fixed and cannot change during program execution.
   - Examples of statically-typed languages include Java, C++, C#, and Rust.
   - Advantages:
     - Static typing catches type-related errors at compile-time, reducing runtime errors and improving code reliability.
     - It provides better code documentation and makes the codebase more maintainable.
     - Static typing enables better tooling support, such as code completion and refactoring.
     - It can lead to improved performance since type checks are performed at compile-time.
   - Disadvantages:
     - Static typing requires more explicit code and type annotations, which can make the code more verbose.
     - It may require more upfront design and planning to define the type system accurately.
     - Static typing can sometimes be less flexible and may require more code changes when modifying the type system.

It's worth noting that some languages, such as TypeScript and Flow, introduce static typing on top of dynamically-typed languages like JavaScript. These languages provide optional static typing, allowing developers to add type annotations and benefit from static type checking while still leveraging the flexibility of dynamic typing.

Even python has some static typing choices  since it supports type hints, which allow developers to optionally specify types for variables, function parameters, and return values. Type hints were introduced in Python 3.5 as part of PEP 484. By using type hints, you can indicate the expected types of variables and function signatures, making your code more readable, maintainable, and self-documenting. Type hints are not enforced by the Python interpreter at runtime, but they can be used by static type checkers, IDEs, and other tools to detect potential type-related issues and provide better code analysis and completion. To define types in Python, you can use the `typing` module, which provides various types and type constructors. For example, you can use `int`, `str`, `list`, `dict`, `Optional`, `Union`, and more to specify types. While using type hints is optional in Python, it can greatly enhance the development experience and catch type-related bugs early in the development process.