import * as vscode from 'vscode'
import { Action } from './Action'
import registerTool from './helper/registerTool'
import ListenerManager from './ListenerManager'

export default function start(context: vscode.ExtensionContext) {
    const manager = new ListenerManager()
    manager.set(Action.open, '', (request) => {
        vscode.env.openExternal(vscode.Uri.parse(request.key))
    })
    registerTool(context, manager)
}
