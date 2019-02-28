import { AjaxService } from './AjaxService';
import { CommonService } from './CommonService';
import { LocalStorageService } from './LocalStorageService';

export class FlickrService {
    constructor() {
        this.ajaxService = new AjaxService();
        this.commonService = new CommonService();
        this.key = this.commonService.getCurrentTimeNameAndKey().key;
        this.localStorageService = new LocalStorageService(this.key);
    }
    async get() {

        const imageUrlFromCache = this.localStorageService.get();
        if (imageUrlFromCache)
            return imageUrlFromCache;

        let imageUrl = '';
        try {
            const requestUrl = this.buildUrl();
            const response = await this.ajaxService.get(requestUrl);
            const photos = response.photos.photo;
            const selectedIndex = photos.length == 1 ? 0 : this.commonService.getRandomNumber(0, photos.length-1);
            imageUrl = this.buildImagePath(photos[selectedIndex]);

            this.localStorageService.set(imageUrl);
        }
        catch (error) {
            console.log(error);
            imageUrl = 'err';
        }
        return imageUrl;
    }
    buildImagePath(photo) {
        // https://www.flickr.com/services/api/misc.urls.html
        const url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_h.jpg`;
        console.log(url);
        return url;
    }
    buildUrl() {
        const url = 'https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=1729040527eabf65a4cfd91aae30b184&gallery_id=' + this.key + '&format=json&nojsoncallback=1';
        return url;
    }
    clear() {
        this.localStorageService.clear();
    }
}