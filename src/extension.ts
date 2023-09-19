import * as vscode from "vscode";
import { GitExtension } from "./../api/git";
import { handleCommitMessage } from "./handleCommitMessage";
import { handleError } from "./handleError";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "git-comment-template.generateCommitMessage",
    (gitSCM: vscode.SourceControl) => {
      try {
        if (gitSCM?.rootUri) {
          const gitExtension =
            vscode.extensions.getExtension<GitExtension>("vscode.git")!.exports;

          const git = gitExtension.getAPI(1).getRepository(gitSCM.rootUri);

          if (git) {
            const config = vscode.workspace.getConfiguration(
              "git-comment-template"
            );
            const branchName = git.state.HEAD?.name;
            const regex = config.get("regex") as string;
            const template = config.get("template") as string;

            if (!regex || !template || !branchName) {
              throw new Error("Configuration can't be empty");
            }

            handleCommitMessage(git.inputBox, {
              branchName,
              regex,
              template,
            });
          } else {
            throw new Error("Could not find git root");
          }
        } else {
          throw new Error("Could not find git SourceControl");
        }
      } catch (e: any) {
        handleError(e);
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
