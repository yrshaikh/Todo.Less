export class CommonService {
    getRandomNumber(min, max) {
        if (min === 0 && max === 0)
            return 0;
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    getCurrentHour() {
        const date = new Date();
        const
            hour = date.getHours();
        return hour;
    }
    getCurrentTime() {
        const date = new Date();
        const
            hour = date.getHours(),
            minute = date.getMinutes(),
            hourFormatted = hour % 12 || 12, // hour returned in 24 hour format
            minuteFormatted = minute < 10 ? '0' + minute : minute,
            morning = hour < 12 ? 'AM' : 'PM';
        return `${hourFormatted}:${minuteFormatted} ${morning}`;
    }
}
