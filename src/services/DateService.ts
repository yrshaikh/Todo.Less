import moment from "moment";

class DateService {
    private static dateFormat = "LL";
    public static getDateFromOffset(offset: number): string {
        if (offset !== 0) {
            console.log(moment().subtract(offset).format(DateService.dateFormat));
            return moment().subtract(offset, "days").format(DateService.dateFormat);
        }
        return `Today - ${moment().subtract(offset).format(DateService.dateFormat)}`;
    }
}

export { DateService };
