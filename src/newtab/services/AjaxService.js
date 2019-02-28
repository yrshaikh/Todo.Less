export class AjaxService {
    async get(url) {
        let response = await fetch(url);
        if (response.ok) return await response.json();
        throw new Error(response.status);
    }
}
