# AI Fantasy Sports App Monorepo

This monorepo contains:


## Getting Started




## Getting Started

This project uses Yarn workspaces and Turborepo for monorepo management. The instructions below cover setup for **Linux**, **macOS**, and **Windows**.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/)
- [Git](https://git-scm.com/)

### Clone the Repository

```sh
git clone https://github.com/your-org/ai-fantasy-sports-app.git
cd ai-fantasy-sports-app
```

### Install Dependencies

#### Linux & macOS

```sh
yarn install
```

#### Windows

Open **PowerShell** or **Command Prompt** and run:

```sh
yarn install
```

### Start the Development Servers

Use the monorepo scripts for starting frontend and backend:

#### All Platforms (Linux, macOS, Windows)

```sh
yarn dev
```

This command will start all apps and packages in development mode using Turborepo.

### Running Tests

```sh
yarn test
```

### Additional Commands

- **Build all packages/apps:**  
	```sh
	yarn build
	```
- **Lint all code:**  
	```sh
	yarn lint
	```
- **Format code:**  
	```sh
	yarn format
	```

### Notes

- If you encounter permission issues on Linux/macOS, try:
	```sh
	sudo yarn install
	```
- For more details on available scripts, see the `package.json` and Turborepo configuration.

---

For further details, refer to the [Copilot Instructions](.github/copilot-instructions.md) for coding standards and best practices.
You can add shared packages in the `packages/` directory.
