import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    errors: string[] = [];
    urls: string[] = [];
    constructor() {
    }

    public pushError(error: string, url = '') {
        this.errors.push(error);
        this.urls.push(url);
    }
    get error(): string {
        if (this.errors.length) {
            return this.errors[0];
        } else {
            return null;
        }
    }
    get url(): string {
        if (this.urls.length) {
            return this.urls[0];
        } else {
            return null;
        }
    }

    public clear() {
        this.errors.pop();
        this.urls.pop();
    }
}
