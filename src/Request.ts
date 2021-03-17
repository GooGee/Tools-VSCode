import { Action } from './Action'

export default class Request {
    constructor(public action: Action, public key: string, public data: any) {}
}
