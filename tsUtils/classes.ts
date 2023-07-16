export class Utils {

    public static getLocalTime(hours: number, minutes: number) {
        const date = new Date();

        date.setHours(hours);
        date.setMinutes(minutes);

        return date;
    }

    public static getTimeFormatted(date: Date) {
       return `${date.getHours()}:${date.getMinutes()}`;
    }

    public static getRandomNumber(max: number) {
        return ~~(Math.random() * max)
    }

    public static getRandomRGB() {
        return [Utils.getRandomNumber(256), Utils.getRandomNumber(256), Utils.getRandomNumber(256)]
    }

}