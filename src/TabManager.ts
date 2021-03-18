import * as vscode from 'vscode'
import makePanel from './helper/makePanel'

export class TabManager {
    readonly map: Map<string, vscode.WebviewPanel> = new Map()

    get(title: string, uri: string) {
        if (this.map.has(uri)) {
            return this.map.get(uri)!
        }

        const tab = makePanel(title, uri)
        this.map.set(uri, tab)
        return tab
    }
}
