---
title: "Installing Python"
sidebar_label: "Installing Python"
sidebar_position: 2
---

Official instructions are available on the python wiki: https://wiki.python.org/moin/BeginnersGuide/Download

Installing Python
------------------

To install Python on your computer, follow these step-by-step instructions for your operating system:

### Windows:

1. Visit the official Python website at https://www.python.org/downloads/windows/.
2. Under the "Python Releases for Windows" section, click on the latest Python version (e.g., Python 3.9.5).
3. Scroll down to the "Files" section and download the appropriate installer for your system (32-bit or 64-bit).
4. Run the installer and make sure to check the option "Add Python to PATH" during the installation process.
5. Follow the installation wizard, choosing the default settings unless you have specific requirements.
6. Once the installation is complete, open the Command Prompt and type `python --version` to verify that Python is installed correctly. (If your command prompt / terminal was already open, it will need to be restarted.)

### macOS:

1. Visit the official Python website at https://www.python.org/downloads/mac-osx/.
2. Under the "Python Releases for Mac OS X" section, click on the latest Python version (e.g., Python 3.9.5).
3. Download the macOS installer package (e.g., python-3.9.5-macosx10.9.pkg).
4. Double-click the downloaded file to start the installation process.
5. Follow the installation wizard, choosing the default settings unless you have specific requirements.
6. Once the installation is complete, open the Terminal and type `python3 --version` to verify that Python is installed correctly.

### Linux:

Python is often pre-installed on Linux systems. To check if Python is already installed and its version, open the terminal and type:

```
python --version
```

If Python is not installed, or you want to install a different version, follow these steps:

1. Open the terminal.
2. Use the package manager specific to your Linux distribution to install Python. For example:
   - For Ubuntu or Debian:
     ```
     sudo apt-get update
     sudo apt-get install python3
     ```
   - For Fedora or Red Hat:
     ```
     sudo dnf install python3
     ```
3. Once the installation is complete, type `python3 --version` in the terminal to verify that Python is installed correctly.

### Additional Steps (Optional):

- If you want to install multiple versions of Python or create isolated environments, you can use tools like `pyenv` or `conda`. We will look deeper into this further on.
- Pip usually comes pre-installed, if it isn't, then install it by running `python -m ensurepip --default-pip`.