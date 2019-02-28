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
    getCurrentTimeNameAndKey() {
        const date = new Date();
        const hour = date.getHours();
        
        if (hour >= 0 && hour <4) {
            return {
                key: '72157674178546727',
                label: 'LateNight'
            };
        }
        else if (hour >= 4 && hour < 7) {
            return {
                key: '72157704256497484',
                label: 'EarlyMorning'
            };
        }
        else if (hour >= 7 && hour < 11) {
            return {
                key: '72157702809494401',
                label: 'Morning'
            };
        }
        else if (hour >= 11 && hour < 14) {
            return {
                key: '72157704293973615',
                label: 'Lunch'
            };
        }
        else if (hour >= 14 && hour < 18) {
            return {
                key: '72157702809504641',
                label: 'Afternoon'
            };
        }
        else if (hour >= 18 && hour < 20) {
            return {
                key: '72157704293986965',
                label: 'Evening'
            };
        }
        else if (hour >= 20 && hour < 22) {
            return {
                key: '72157702809513431',
                label: 'Dinner'
            };
        }
        else if (hour >= 22 && hour < 24) {
            return {
                key: '72157702809515871',
                label: 'Night'
            };
        }
        else {
            return {
                key: '72157704262118125',
                label: 'Default'
            };
        }
    }
}
