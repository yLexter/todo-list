export class Utils {

    public static getLocalTime(hours: number, minutes: number) {
        const date = new Date();

        date.setHours(hours);
        date.setMinutes(minutes);

        return date;
    }

    public static getTimeFormatted(date: Date) {
        return `
          ${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}
        `;
    }

    public static getRandomNumber(max: number) {
        return ~~(Math.random() * max)
    }

    public static getRandomColor() {
        return `rgb(${Utils.getRandomNumber(256)}, ${Utils.getRandomNumber(256)}, ${Utils.getRandomNumber(256)}, 0.5)`
    }

    public static createMatrix<T>(lines: number, columns: number) {
        const matrix: T | null[][] = [];

        for (let i = 0; i < lines; i++) {
            matrix[i] = [];

            for (let j = 0; j < columns; j++)
                matrix[i][j] = null;

        }

        return matrix;
    }

}