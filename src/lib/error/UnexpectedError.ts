export class UnexpectedError extends Error {
  constructor(message?: string, options?: ErrorOptions) {
    super(`[Unexpected] ${message}`, options)
  }
}
