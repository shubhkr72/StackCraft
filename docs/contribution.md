# Contributing to StackCraft 

## Welcome!

Thank you for your interest in contributing to StackCraft! We are thrilled to have you here. Whether you are a seasoned developer or a first-time contributor, your help in making this knowledge base better is greatly appreciated.

Contributions are the heartbeat of open-source projects. By contributing, you help improve the quality of the content, fix bugs, and add new perspectives that make this resource more valuable for the entire system design community.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Ways to Contribute](#ways-to-contribute)
- [Before You Start](#before-you-start)
- [Contribution Workflow](#contribution-workflow)
- [Coding Standards](#coding-standards--best-practices)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Issue Guidelines](#issue-guidelines)
- [Commit Message Convention](#commit-message-convention)
- [Branch Naming Convention](#branch-naming-convention)
- [Contributor Checklist](#contributor-checklist)
- [Review Process](#review-process)
- [Acknowledgement](#acknowledgement)

---

## Code of Conduct

We are committed to providing a friendly, safe, and welcoming environment for everyone. By participating in this project, you agree to:

- **Be Respectful** – Use professional and kind language in all interactions.
- **Be Inclusive** – Welcome contributors from all backgrounds and skill levels.
- **Collaborate Constructively** – Focus on the code and the content, not the person.
- **Avoid Harassment** – We have zero tolerance for offensive comments, personal attacks, or exclusionary behavior.

---

## Ways to Contribute

There are many ways to help improve StackCraft beyond just writing code:

- **Bug Reports** – Found a typo, a broken link, or a technical issue? Let us know.
- **Feature Requests** – Have an idea for a new topic or improvement? We'd love to hear it.
- **Documentation Improvements** – Improve explanations, examples, or fix grammar and formatting.
- **Code Contributions** – Fix bugs, improve performance, or build new features.
- **Performance Improvements** – Optimize loading time, build process, or overall user experience.
- **Testing** – Help ensure the project works correctly across different environments.

---

## Before You Start

Before contributing, ensure you have the following installed:

- Node.js (Recommended: **v22.x**)
- npm (bundled with Node.js)
- Git

Also:

- Read this guide completely.
- Search existing issues before creating a new one.
- Discuss large changes by opening an issue first.

---

## Contribution Workflow

### 1. Fork the Repository

Click the **Fork** button on GitHub to create your own copy of the repository.

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/StackCraft.git
cd StackCraft
```

### 3. Create a New Branch

Never work directly on the `main` branch.

```bash
git checkout -b feature/your-feature-name
```

or

```bash
git checkout -b fix/bug-description
```

### 4. Make Your Changes

Implement your changes while following the project's coding standards.

### 5. Commit Your Changes

```bash
git add .
git commit -m "feat: add detailed explanation of Load Balancers"
```

### 6. Push Your Branch

```bash
git push origin feature/your-feature-name
```

### 7. Open a Pull Request

Go to your fork on GitHub and click **Compare & Pull Request**.

Provide:

- A clear title
- A detailed description
- Related issue number (if applicable)
- Screenshots (for UI changes)

---

## Coding Standards & Best Practices

Please follow these guidelines to keep the project consistent:

- Write clean, readable, and maintainable code.
- Use meaningful variable and function names.
- Prefer small, reusable functions over large blocks of code.
- Comment only where necessary to explain complex logic.
- Follow the existing project structure and coding style.
- Test your changes locally before opening a Pull Request.
- Keep documentation up to date whenever functionality changes.

---

## Pull Request Guidelines

To ensure a smooth review process:

- Keep each Pull Request focused on a single change.
- Link the related issue whenever possible.
- Include screenshots or recordings for UI changes.
- Update documentation if your changes affect it.
- Ensure the project builds successfully.
- Resolve merge conflicts before requesting a review.

---

## Issue Guidelines

When reporting an issue or requesting a feature:

1. Search existing issues first.
2. Provide clear reproduction steps.
3. Explain the expected behavior.
4. Explain the actual behavior.
5. Include environment details such as:
   - Operating System
   - Browser
   - Node.js version

---

## Commit Message Convention

We follow a simplified version of **Conventional Commits**.

Format:

```text
<type>: <description>
```

Common types:

| Type | Description |
|------|-------------|
| feat | New feature |
| fix | Bug fix |
| docs | Documentation changes |
| style | Formatting/style changes |
| refactor | Code restructuring |
| perf | Performance improvements |
| test | Tests |

Examples:

```text
feat: add caching documentation
fix: resolve sidebar navigation bug
docs: update deployment guide
refactor: simplify API helper
```

---

## Branch Naming Convention

Use descriptive branch names.

Examples:

```text
feature/search-optimization
feature/load-balancer-article
fix/navbar-overlap
docs/update-contributing-guide
refactor/api-client
```

---

## Contributor Checklist

Before opening a Pull Request, ensure that:

- [ ] My code follows the project's coding standards.
- [ ] I tested my changes locally.
- [ ] I updated the documentation if necessary.
- [ ] My commit message follows the convention.
- [ ] My branch name follows the naming convention.
- [ ] I linked the related issue (if applicable).
- [ ] My Pull Request is focused on a single feature or fix.

---

## Review Process

After submitting a Pull Request:

1. A maintainer will perform an initial review.
2. The code will be reviewed for quality, correctness, and consistency.
3. Feedback may be provided for improvements.
4. Once approved and all checks pass, your Pull Request will be merged.

Please be patient during the review process. We appreciate every contribution.

---

## Acknowledgement

This article is contributed by **[Shubham Kumar](https://www.linkedin.com/in/shubham-sebrin/)**.

Thank you for helping improve StackCraft and making open source better for everyone.