---
title: "Running Python Code"
sidebar_label: "Running Python Code"
sidebar_position: 3
---

Running Python Code
---------------------

Once you have Python installed on your system, you can start writing and running Python code. There are several ways to execute Python code, depending on your preferred development environment and the nature of your project.

### Running Python Code in an Editor or IDE:

Many text editors and Integrated Development Environments (IDEs) provide built-in features to run Python code directly within the editor. Some popular choices include:

- PyCharm: PyCharm is a powerful IDE specifically designed for Python development. It offers a wide range of features, including code completion, debugging, and an integrated Python console.
- Visual Studio Code: Visual Studio Code is a lightweight and extensible code editor that supports Python development through extensions. It provides features like code highlighting, debugging, and an integrated terminal.
- Jupyter Notebook: Jupyter Notebook is a web-based interactive development environment that allows you to create and share documents containing live code, equations, visualizations, and narrative text. It is commonly used for data analysis and scientific computing.

These editors and IDEs often provide a "Run" button or menu option to execute the Python code directly within the editor. However, it's important to note that relying solely on these built-in run features may limit your understanding of how Python code is executed from the command line.

I will go more in depth on choosing an editor/IDE in [Python IDEs and text editors](/docs/introduction-to-python/python-ides-and-text-editors.md).

### Running Python Code from the Command Line Interface (CLI):

Running Python code from the command line is a fundamental skill that every Python developer should learn. It gives you more control over the execution process and helps you understand how to run Python scripts independently of an editor or IDE.

To run a Python script from the command line:

1. Open a terminal or command prompt.
2. Navigate to the directory (Where your code/project is) where your Python script is located using the `cd` command. For example:
   ```
   cd /path/to/your/script/directory
   ```
3. Once you're in the correct directory, you can run the Python script by typing `python` followed by the script's filename. For example:
   ```
   python your_script.py
   ```
   Replace `your_script.py` with the actual name of your Python script file.

4. Press Enter to execute the command. The Python interpreter will run the script, and any output or results will be displayed in the terminal.

By running Python code from the command line, you gain a better understanding of how the Python interpreter works and how to execute scripts independently. It also allows you to run Python scripts on systems where an editor or IDE may not be available.

### Benefits of Learning to Run Python Code from the CLI:

1. Portability: Knowing how to run Python scripts from the command line makes your code more portable. You can run your scripts on any system that has Python installed, without relying on specific editors or IDEs.

2. Automation: Running Python scripts from the command line enables you to automate tasks and create scripts that can be executed programmatically or scheduled to run at specific intervals.

3. Debugging: When running Python code from the command line, you can easily see any error messages or output directly in the terminal. This can be helpful for debugging and understanding the flow of your program.

4. Flexibility: Running Python code from the command line gives you more control over the execution process. You can pass command-line arguments, set environment variables, and interact with the script's input and output streams.

While editors and IDEs provide convenient features and can enhance your development experience, it's crucial to learn how to run Python code from the command line.