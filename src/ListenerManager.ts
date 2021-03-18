import { Action } from './Action'
import Handler from './Handler'
import Request from './Request'

class Listener {
    readonly map: Map<string, Handler> = new Map()
}

export default class ListenerManager {
    readonly map: Map<Action, Listener> = new Map()

    handle(request: Request) {
        const found = this.get(request.action, request.key)
        if (found) {
            found(request)
            return
        }
    }

    get(action: Action, key: string) {
        const found = this.map.get(action)
        if (found) {
            return found.map.get(key)
        }
        return undefined
    }

    set(action: Action, key: string, handler: Handler) {
        let found = this.map.get(action)
        if (found === undefined) {
            found = new Listener()
        }
        found.map.set(key, handler)
    }
}
