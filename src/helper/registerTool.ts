import * as vscode from 'vscode'
import makeHTML from './makeHTML'
import ListenerManager from '../ListenerManager'
import Request from '../Request'

let panel: vscode.WebviewPanel | null = null

function make() {
    panel = vscode.window.createWebviewPanel('Tools', 'Tools', vscode.ViewColumn.One, {
        enableScripts: true,
        retainContextWhenHidden: true,
    })
    panel.webview.html = makeHTML('', '')
}

function listen(context: vscode.ExtensionContext, manager: ListenerManager) {
    if (panel === null) {
        return
    }
    panel.webview.onDidReceiveMessage(
        (request: Request) => {
            manager.handle(request)
        },
        undefined,
        context.subscriptions,
    )
}

export default function registerTool(context: vscode.ExtensionContext, manager: ListenerManager) {
    const disposable = vscode.commands.registerCommand('tools.showTool', () => {
        if (panel === null) {
            make()
            listen(context, manager)
        } else {
            panel.reveal()
        }
    })

    context.subscriptions.push(disposable)
}
