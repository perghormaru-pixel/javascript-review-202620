/**
 * Custom error class for validation errors.
 * @extends {Error}
 */
export class ValidationError extends Error {
    /**
     * Creates an instance of ValidationError.
     * @param message   - The error message.
     */
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}