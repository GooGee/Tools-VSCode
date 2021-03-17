import * as vscode from 'vscode'
import makeHTML from './helper/html'

export class TabManager {
    readonly map: Map<string, vscode.WebviewPanel> = new Map()

    make(title: string, uri: string) {
        const panel = vscode.window.createWebviewPanel('Tools', 'Tools', vscode.ViewColumn.One, {
            enableScripts: true,
            retainContextWhenHidden: true,
        })
        panel.webview.html = makeHTML(title, uri)
        return panel
    }

    get(title: string, uri: string) {
        if (this.map.has(uri)) {
            return this.map.get(uri)!
        }

        const tab = this.make(title, uri)
        this.map.set(uri, tab)
        return tab
    }
}
