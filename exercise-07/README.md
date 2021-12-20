# Javascript API Skeleton

## Description

Javascript skeleton for developing Node.js applications with Javascript. The skeleton have integrated EsLint for lint code and Prettier for format code.

## Usage

### First use

---

Run:

```shell
./install.sh
```

This script installs the NPM packages and sets the new project name and description if desired.

### Configure environment variables

---

1. Create an .env file in th root of the project.
2. Set the environment variables you need.

**NOTE:** The configured environment variables are loaded automatically when run the dev or start scripts.

### Lint

---

``` shell
npm run lint
```

### Test

---

The test are run with Jest Javascript Testing Framework.

Basic command:

``` shell
npm run test
```

If you want to see the coverage, run:

``` shell
npm run test:coverage
```

### Develop

---

``` shell
npm run dev
```

### Build

---

``` shell
npm run build
```

**NOTE:** Babel is used to compile javascript files.

### Start the application as in production

---

``` shell
npm run start
```

## Packages installed for production

- DotEnv
