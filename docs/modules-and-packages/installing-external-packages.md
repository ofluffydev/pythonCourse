---
title: "Installing External Packages"
sidebar_label: "Installing External Packages"
sidebar_position: 4
---
# Installing External Packages in Python

## Introduction

Python's strength lies in its extensive ecosystem of third-party packages. These external packages extend Python's functionality, allowing developers to leverage pre-written code for various tasks. This guide focuses on how to install these packages, primarily using pip, but also covers alternative methods.

In the upcoming advanced topics, you will need to install external packages to work with data, web development, machine learning, and more. Understanding how to install packages is a fundamental skill for Python developers.

## Using pip to Install Packages

pip is the most common and recommended tool for installing Python packages. It's a command-line program, so you'll need to use your terminal or command prompt to run pip commands.

### Basic Package Installation
:::tip
You will most likely use the "Terminal" or "Command Prompt" to run the following commands. If you wish to learn more about the terminal, you can check out the [Terminal](/docs/universal-topics/terminal) section.
:::
To install a package using pip:

```
pip install package_name
```

For example, to install the popular `requests` library:

```
pip install requests
```

### Installing Specific Versions

To install a specific version of a package:

```
pip install package_name==version_number
```

Example:

```
pip install requests==2.25.1
```

### Upgrading Packages

To upgrade an already installed package:

```
pip install --upgrade package_name
```

### Installing Multiple Packages

You can install multiple packages at once:

```
pip install package1 package2 package3
```

### Installing from a Requirements File

For projects with multiple dependencies, use a `requirements.txt` file:

```
pip install -r requirements.txt
```

The `requirements.txt` file should list each required package on a separate line.

## Alternative Methods for Installing Packages

While pip is the most common method, there are other ways to install Python packages:

### 1. Using conda

If you're using Anaconda or Miniconda, you can use the `conda` command to install packages:

```
conda install package_name
```

Conda is particularly useful for data science packages and can handle non-Python dependencies more easily than pip.

### 2. Installing from Source

Some packages can be installed directly from their source code:

1. Download the package source (usually a .tar.gz or .zip file)
2. Unpack the file
3. Navigate to the package directory
4. Run:
   ```
   python setup.py install
   ```

### 3. Using easy_install

While largely superseded by pip, `easy_install` is still available:

```
easy_install package_name
```

However, it's recommended to use pip instead of `easy_install` for most cases.

### 4. System Package Managers

On some systems, you can use the system package manager:
:::warning
On most linux based systems, you have to use the package manager unless you use a virtual environment.
:::

- On Ubuntu/Debian:
  ```
  sudo apt-get install python3-package_name
  ```
- On Fedora:
  ```
  sudo dnf install python3-package_name
  ```

This method is less common and may not always have the latest package versions.

## Best Practices for Installing Packages

1. **Use Virtual Environments**: Always install packages in a virtual environment to avoid conflicts between projects. (These are explained further on, don't worry if you don't know what they are yet).

2. **Specify Versions**: When sharing your project, specify exact package versions in your `requirements.txt` file.

3. **Keep Your Environment Clean**: Regularly review and remove unused packages.

4. **Update Safely**: Test your code after updating packages to ensure compatibility.

5. **Use Official Sources**: Stick to official package repositories like PyPI when using pip.

## Troubleshooting Common Installation Issues

1. **Permission Errors**: If you encounter permission errors, avoid using `sudo pip`. Instead, use the `--user` flag or set up a virtual environment.

2. **Dependency Conflicts**: If a package installation fails due to conflicts, try creating a new virtual environment or use tools like `pipenv` or `poetry` for advanced dependency management.

3. **SSL Certificate Errors**: Ensure your Python installation has SSL support. You might need to install the `certifi` package.

4. **Outdated pip**: Keep pip updated with `pip install --upgrade pip`.

## Security Considerations

- Always download packages from trusted sources.
- Be cautious when installing packages from unknown sources or directly from version control systems.
- Consider using hash-checking mode (`pip install --require-hashes -r requirements.txt`) for additional security.

Installing external packages greatly expands Python's capabilities, allowing you to leverage a vast ecosystem of tools and libraries. While pip is the primary method for most users, understanding alternative installation methods can be helpful in certain scenarios or environments. Always prioritize using virtual environments and following security best practices when installing external packages.