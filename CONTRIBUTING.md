# Contributing to Lightweight Charts Vue

Thank you for considering contributing to Lightweight Charts Vue! We welcome contributions from the community to help improve the library. Here are some guidelines to help you get started:

## How to Contribute or 7 steps to become a contributor

To contribute to the Lightweight Charts Vue project, please follow these steps:

1. **Fork the Repository**: Start by forking the repository to your own GitHub account.
2. **Clone Your Fork**: Clone your forked repository to your local machine.
   ```bash
   git clone https://github.com/your-username/lightweight-charts-vue.git
   ```
3. **Create a Branch**: Create a new branch for your feature or bug fix.
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make Changes**: Make your changes in the codebase. Ensure that your code adheres to the project's coding standards.
5. **Commit Your Changes**: Commit your changes with a clear and concise commit message. Follow the conventional commit style for better clarity (see [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)).
   ```bash
   git commit -m "feat: your-feature-name"
   ```
6. **Push Your Changes**: Push your changes to your forked repository.
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request**: Go to the original repository and create a pull request from your branch. Provide a clear description of the changes you made and why they are necessary.

## Code Style

We follow a consistent code style to maintain readability and quality. Please ensure your code adheres to the following guidelines:

- Use [Prettier](https://prettier.io/) for code formatting.
- Use [ESLint](https://eslint.org/) for linting. The project is configured with ESLint, so you can run it locally to check your code.
- Use [Commitlint](https://commitlint.js.org/) to ensure your commit messages follow the conventional commit style.

## Release Process

When you are ready to release a new version of the library, please follow these steps:

1. Update package version in `lib` directory.
2. Ensure all tests pass and the code is linted.
3. Create a new release branch from `main`.
   ```bash
   git checkout -b release/vX.X.X
   ```
4. Update the `CHANGELOG.md` with the changes made in this release.
5. Commit the changes and push the release branch.
   ```bash
   git commit -m "chore(release): vX.X.X"
   git push origin release/vX.X.X
   ```
6. Create a tag for the release.
   ```bash
   git tag -a vX.X.X -m "Release vX.X.X"
   git push origin vX.X.X
   ```
7. Create a pull request to merge the release branch into `main`. Prefer rebasing the branch to preserve tag and clear history.
8. Once the pull request is approved, merge it into `main`.
9. Run `Release` workflow in GitHub Actions to publish the new version to npm. Use your tag name as a workflow input.

## License

By contributing, you agree that your code will be licensed under the [MIT License](https://github.com/ukorvl/lightweight-charts-vue/blob/main/lib/LICENSE).

Thank you for your contributions! 🎉
