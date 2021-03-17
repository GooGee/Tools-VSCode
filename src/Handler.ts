import Request from './Request'

export default interface Handler {
    (request: Request): void
}
