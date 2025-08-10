# Copilot Instructions

Use this file to specify best practices, coding standards, and preferences for this project. Copilot will follow these instructions when assisting you.

## Example Sections

### Coding Standards
- Use ES6+ syntax for all JavaScript/TypeScript code
- Prefer functional components in Vite
- Use async/await for asynchronous code

### Folder Structure
- Organize code by feature, not by type
- Place shared code in the `packages/` directory
- Try to keep package sizes to a minimum prioritizing separate packages for unrelated functionality.

### Libraries & Tools
- Use Yarn as the package manager
- Use Express for backend APIs
- Use Vite for frontend
- Use Prettier and ESLint for code formatting and linting
- If new frameworks are added, check: https://github.com/tsconfig/bases for base configs to add the the associated project.

### Testing
- Use vitest for unit tests
- Place tests in a `__tests__` folder inside each package/app
- Make sure tests are up to date with any new changes. This includes adding new tests and updating existing tests.

### Other Preferences
- Write clear, concise comments
- Prefer TypeScript if possible
- Avoid unnecessary dependencies
- Make sure any existing or new packages that are added to the monorepo have the required turborepo scripts and configuration.
- Review any files that are no longer needed and recommend their removal.
- Always use and recommend monorepo scripts/commands where possible.

---
Edit or expand this file with your own preferences and standards. For more details, see: https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file
