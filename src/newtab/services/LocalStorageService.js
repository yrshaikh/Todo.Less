export class LocalStorageService {
    constructor(key) {
        this.key = key;
        this.version = 'v1:';
        this.expiryKeyPart = '_expiry';
    }
    get() {
        const expiry = localStorage.getItem(this.version + this.key + this.expiryKeyPart);
        if (expiry === 'null' || expiry === null || expiry === undefined)
            return null;

        const now = Date.now();
        if (expiry < now) {
            this.clear();
            return null;
        }

        const value = localStorage.getItem(this.version + this.key);
        if (value === 'null' || value === null || value === undefined)
            return null;
        return value;
    }
    set(value) {
        const numberOfSeconds = 3600;
        var now = Date.now();
        var schedule = now + numberOfSeconds * 1000;
        localStorage.setItem(this.version + this.key, value);
        localStorage.setItem(this.version + this.key + this.expiryKeyPart, schedule);
    }
    clear() {
        localStorage.removeItem(this.version + this.key);
        localStorage.removeItem(this.version + this.key + this.expiryKeyPart);
    }
}