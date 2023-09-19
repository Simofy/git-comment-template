import * as vscode from "vscode";

export function handleError(e: Error) {
  if (e.message) {
    vscode.window.showErrorMessage(e.message);
    return;
  }

  if (typeof e === "string") {
    vscode.window.showErrorMessage(e);
    return;
  }

  vscode.window.showErrorMessage("Something went wrong.");
}
