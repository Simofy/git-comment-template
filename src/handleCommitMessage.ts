import { InputBox } from "../api/git";

export function handleCommitMessage(
  inputBox: InputBox,
  config: {
    regex: string;
    template: string;
    branchName: string;
  }
) {
  const regex = new RegExp(config.regex);
  const matches = regex.exec(config.branchName);
  if (matches) {
    const [firstMatch] = matches;
    if (firstMatch) {
      inputBox.value = config.template.replace("%s", firstMatch);
      return;
    }
  }
  throw new Error("Could not match regex");
}
