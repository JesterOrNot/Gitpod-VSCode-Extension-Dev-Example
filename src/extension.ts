import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "helloworld" is now active!');
    context.subscriptions.push(vscode.commands.registerCommand('extension.ls', () => {
        const terminal = vscode.window.createTerminal(`ls command`);
        terminal.sendText("ls");
        terminal.show(true);
    }));
    context.subscriptions.push(vscode.commands.registerCommand('extension.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World From VSCode!');
    }));
}
export function deactivate() { }
