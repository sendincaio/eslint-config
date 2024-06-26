# Caio Sendin ESLint config

## Setup

### React (with Next.js)

Install dependencies:
```
npm i -D @sendincaio/eslint-config
```
Inside `.eslintrc.json`
```
{
  "extends": [
    "@sendincaio/eslint-config/next", 
    "next/core-web-vitals"
  ]
}
```

### React (without Next.js)

Install dependencies:
```
npm i -D @sendincaio/eslint-config
```
Inside `.eslintrc.json`
```
{
  "extends": ["@sendincaio/eslint-config/react"]
}
```

### Node.js

Install dependencies:
```
npm i -D @sendincaio/eslint-config
```
Inside `.eslintrc.json`
```
{
  "extends": ["@sendincaio/eslint-config/node"]
}
```
