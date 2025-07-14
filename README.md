# Relatos de Barrios Monorepo

This repository contains the collection of web projects for Relatos de Barrios, managed as a Turborepo monorepo with Bun as the package manager.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/en/) (v18 or newer)
- [Bun](https://bun.sh/) (v1.0 or newer)

## 1. Installation

After cloning the repository, the first step is to install all the necessary dependencies for all projects. Navigate to the root directory of the project and run the following command:

```bash
bun install
```

This single command will read the `workspaces` configuration in the root `package.json` and install all dependencies for the applications (`covico`, `hub`, `rengifo`) and any shared packages.

## 2. Running the Projects

You can run each application individually or run all of them simultaneously.

### Running a Single Project

To run a specific application's development server, use the `turbo run dev` command with a `--filter` flag pointing to the app's name.

**To run the `covico` app:**

```bash
turbo run dev --filter=covico
```

**To run the `hub` app:**

```bash
turbo run dev --filter=hub
```

**To run the `rengifo` app:**

```bash
turbo run dev --filter=rengifo
```

### Running All Projects at Once

To start all development servers for all applications simultaneously, run the `dev` script from the root of the repository:

```bash
bun run dev
```

This will use Turborepo to start all the `dev` tasks defined in each application's `package.json` file, and you will see the output for all running servers in your terminal.
