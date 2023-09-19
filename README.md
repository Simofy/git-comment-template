# git-comment-template

This extension generates a commit message based on the branch name by allowing you to provide a regex and a template to fill with the matched value.

<p align="center">
  <img alt="VS Code in action" src="https://raw.githubusercontent.com/Simofy/git-comment-template/main/resources/extension-example.gif">
</p>

## Features

- **Custom Regex Patterns**: Define your own regular expressions to extract specific information from branch names.

- **Flexible Templates**: Create commit message templates with placeholders that correspond to the matched values from the branch name.

- **Saves Time**: Eliminate the need to manually craft commit messages, ensuring consistency and accuracy in your version control history.

- **Improved Workflow**: Enhance your development workflow by easily documenting the purpose or context of each commit.

## Extension Settings

This extension contributes the following settings:

- `git-comment-template.regex`: Provide a regex to match against the branch name for use within the template.

_Example regex:_ `(\\d+)(?![^/]*\\/)` matches `feat/123123-nice-feature` to `123123`

- `git-comment-template.template`: String where `%s` will be replaced with first value from regex.

_Example template:_ `[AB#%s] ` will resolve to `[AB#123123] `
