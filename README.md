# Sendin ESLint Config

A comprehensive and flexible ESLint configuration for Node.js, React, and Next.js projects, ensuring code quality and consistency across your codebase.

## Table of Contents

- [What's Included?](#whats-included)
- [Installation & Setup](#installation--setup)
    - [React with Next.js](#react-with-nextjs)
    - [React](#react)
    - [Node.js](#nodejs)
- [Contributing](#contributing)

## What's Included?

This package includes a set of predefined ESLint configurations optimized for different environments:

- **Standard Config Base**: General rules applicable across various environments.
- **React Plugin**: Enhances linting capabilities specifically for React projects.
- **React Hooks Plugin**: Ensures proper use of React Hooks.
- **JSX a11y Plugin**: Promotes accessibility best practices in JSX code.
- **Prettier**: Integrates Prettier for code formatting, ensuring consistent code style.

## Installation & Setup

### React with Next.js

1. **Install dependencies:**
    ```bash
    npm i eslint @sendin/eslint-config -D
    ```
   
2. **Configure ESLint**: Update your `.eslintrc.json` file:
    ```json
    {
        "extends": [
            "@sendin/eslint-config/next",
            "next/core-web-vitals"
        ]
    }
    ```

### React

1. **Install dependencies:**
    ```bash
    npm i eslint @sendin/eslint-config -D
    ```

2. **Configure ESLint**: Update your `.eslintrc.json` file:
    ```json
    {
        "extends": "@sendin/eslint-config/react"
    }
    ```

### Node.js

1. **Install dependencies:**
    ```bash
    npm i eslint @sendin/eslint-config -D
    ```

2. **Configure ESLint**: Update your `.eslintrc.json` file:
    ```json
    {
        "extends": "@sendin/eslint-config/node"
    }
    ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have suggestions for improvements.
