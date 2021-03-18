import * as vscode from 'vscode'
import makeHTML from './makeHTML'

export default function makePanel(title: string, uri: string) {
    const panel = vscode.window.createWebviewPanel('Tools', title, vscode.ViewColumn.One, {
        enableScripts: true,
        retainContextWhenHidden: true,
    })
    panel.webview.html = makeHTML(title, uri)
    return panel
}
