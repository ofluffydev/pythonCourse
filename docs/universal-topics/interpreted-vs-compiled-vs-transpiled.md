---
title: "Interpreted vs Compiled vs Transpiled"
description: "Learn about the differences between interpreted, compiled, and transpiled languages."
---

Interpreted vs Compiled vs Transpiled
---------------------------------------

When it comes to executing code written in a programming language, there are three main approaches: interpretation, compilation, and transpilation. Let's explore each of these concepts in more detail.

1. **Interpreted Languages**:
   - In interpreted languages, the source code is executed line by line by an interpreter, without being compiled into machine code beforehand.
   - The interpreter reads the source code, interprets it, and executes the instructions directly.
   - Examples of interpreted languages include Python, JavaScript, Ruby, and PHP.
   - **Advantages**:
     - Interpreted languages offer faster development cycles since there is no separate compilation step.
     - They provide more flexibility and dynamic behavior, as code can be modified and executed on the fly.
     - Interpreted languages are generally more portable across different platforms.
   - **Disadvantages**:
     - Interpreted languages tend to have slower execution speed compared to compiled languages.
     - Each time the program is run, the interpreter needs to interpret the code, which can introduce overhead.

2. **Compiled Languages**:
   - In compiled languages, the source code is translated into machine code by a compiler before it is executed.
   - The compiler takes the entire source code, analyzes it, and generates an executable file that contains machine instructions specific to the target platform.
   - Examples of compiled languages include C, C++, and Rust.
   - **Advantages**:
     - Compiled languages generally offer faster execution speed since the code is translated into machine instructions beforehand.
     - The compiled executable can be run directly on the target platform without the need for an interpreter.
     - Compiled languages often provide better performance optimization opportunities.
   - **Disadvantages**:
     - The compilation process adds an extra step to the development workflow, which can slow down development iterations.
     - Compiled executables are platform-specific, meaning they need to be recompiled for different operating systems or architectures.

3. Transpiled Languages:
   - Transpilation is a process where code written in one language is converted into code in another language.
   - The transpiler takes the source code and translates it into a target language, which can then be executed or further compiled.
   - Transpilation is often used when a language is not directly supported by the target platform or when developers want to leverage features of one language while targeting another.
   - Examples of transpilation include:
     - TypeScript transpiled to JavaScript
     - Sass or Less transpiled to CSS
     - Kotlin transpiled to JavaScript for web development
   - Advantages:
     - Transpilation allows developers to use features and syntax of one language while targeting another language or platform.
     - It enables code reuse and leverages existing tools and libraries of the target language.
   - Disadvantages:
     - Transpilation adds an extra step to the build process, which can increase complexity.
     - Debugging transpiled code can be more challenging since the executed code differs from the original source code.

It's worth noting that some languages, like Java and C#, use a hybrid approach. They are compiled into an intermediate representation (bytecode) and then executed by a virtual machine (JVM or CLR) that interprets the bytecode. This approach combines the benefits of both compilation and interpretation.

The choice between interpreted, compiled, or transpiled languages depends on factors such as performance requirements, platform compatibility, development speed, and the specific needs of the project. However, for learning and beginners, the difference in speed is barely noticeable.

Understanding the differences between these approaches can help you make informed decisions when choosing a programming language and development workflow for your projects.