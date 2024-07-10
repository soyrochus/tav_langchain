# Taller de Verano - Developing with OpenAI and LangChain

## Introduction
Welcome to the "Taller de Verano" project! This repository demonstrates the use of OpenAI's GPT-4 model in both Node.js and Python environments, leveraging the capabilities of LangChain for natural language processing and generation tasks. The project is structured to provide examples and tests for developers working with these technologies.

## Project Structure
The repository contains two main directories, each specific to a programming language:

- **js/**: Contains test files and examples for Node.js.
- **python/**: Contains test files and examples for Python.

Both directories are fully functional and showcase the integration and usage of OpenAI's API in their respective languages.

## Getting Started
To get started with the project, navigate to the respective directory (`js` or `python`) and follow the instructions provided in the README files within each subdirectory.

## Requirements
- Node.js (for the `js` directory)
- Python (for the `python` directory)
- OpenAI API Key
- Relevant dependencies (see instructions in each subdirectory)

## Installation
### Node.js
1. Navigate to the `js` directory:
   ```bash
   cd js
   ```

2. Install dependencies:
   ```bash
    npm install
    ```

3. Create a .env file with your OpenAI API key:
    ```env
    OPENAI_API_KEY=your_api_key_here
    ```

Run the example script:
    ```bash
    node script.js
    ```

### Python

1. Install Poetry if you don't have it already:
    ```bash
    curl -sSL https://install.python-poetry.org | python3 -
    ```

For more information, visit the [Poetry installation page](https://python-poetry.org/docs/).

2. Navigate to the python directory:
    ```bash
    cd python
    ```

3. Install dependencies using Poetry:
    ```bash
    poetry install
    ```

4. Create a .env file with your OpenAI API key:
    ```env
    OPENAI_API_KEY=your_api_key_here
    ```

5. Run the example script:
    ```bash
    poetry run python script.py
    ```

## Contributing
We welcome contributions to enhance and expand the capabilities of this project. Feel free to submit pull requests or open issues for any bugs or feature requests.

## Copyright and License
© 2024 Iwan van der Kleijn
This project is licensed under the MIT License.

