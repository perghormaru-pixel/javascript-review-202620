import {ValidationError} from "./errors.js";

export class DateTime {
    #date;

    constructor(date = new Date()) {
        const parsedDate = date instanceof Date ? date : new Date(date);
        if (isNaN(parsedDate.getTime())) throw new ValidationError(`Invalid date: ${date}`);
        this.#date = new Date(parsedDate.getTime());
        Object.freeze(this);
    }

    get date() {
        return new Date(this.#date.getTime());
    }

    toISOString() {
        return this.#date.toISOString();
    }

    toString() {
        let options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: true };
        return this.#date.toLocaleString('en-US', options);
    }

    equals(other) {
        return other instanceof DateTime && this.#date.getTime() === other.date.getTime();
    }
}