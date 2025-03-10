A simple and commonly used commit message structure for `git commit -m` looks like this:

```
<type>(<scope>): <short summary>

<body>

<footer>
```

### Breakdown:
1. **`<type>`**: Describes the purpose of the commit (e.g., `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`).
2. **`<scope>`** (optional): A short description of the section of the code affected (e.g., `api`, `ui`, `auth`).
3. **`<short summary>`**: A concise, imperative statement describing what the commit does (50-72 characters).
4. **`<body>`** (optional): A more detailed explanation of the commit, especially if it's complex or has a significant impact.
5. **`<footer>`** (optional): Additional information, like issue tracker references or breaking changes.

### Example:

```
feat(auth): add JWT authentication

Implemented JWT token generation and validation for user authentication.

BREAKING CHANGE: Refactored the auth service; existing authentication flow may need adjustments.
```

This format follows a conventional structure, which helps maintain clarity in version control history.