// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "vsproxmox" is now active!');
  for (let item of [{ name: "helloWorld", func: () => vscode.window.showInformationMessage("Hello World from VSProxmox!") }]) {
    context.subscriptions.push(vscode.commands.registerCommand("vsproxmox." + item.name, item.func));
  }
}

export function deactivate() {}
