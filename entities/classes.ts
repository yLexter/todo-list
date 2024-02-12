class Utils {
   public static daysOfWeek = [
      { name: "Seg", day: 1 },
      { name: "Ter", day: 2 },
      { name: "Qua", day: 3 },
      { name: "Qui", day: 4 },
      { name: "Sex", day: 5 },
      { name: "Sáb", day: 6 },
      { name: "Dom", day: 0 },
   ];

   public static getLocalTime(hours: number, minutes: number) {
      const date = new Date();

      date.setHours(hours);
      date.setMinutes(minutes);

      return date;
   }

   public static getTimeFormatted(date: Date) {
      return `${date.getHours().toString().padStart(2, "0")}:${date
         .getMinutes()
         .toString()
         .padStart(2, "0")}`;
   }

   public static getRandomNumber(max: number) {
      return ~~(Math.random() * max);
   }

   public static getRandomColor() {
      return `rgb(${Utils.getRandomNumber(256)}, ${Utils.getRandomNumber(
         256
      )}, ${Utils.getRandomNumber(256)}, 0.5)`;
   }

   public static createMatrix<T>(lines: number, columns: number) {
      const matrix: T | null[][] = [];

      for (let i = 0; i < lines; i++) {
         matrix[i] = [];

         for (let j = 0; j < columns; j++) matrix[i][j] = null;
      }

      return matrix;
   }

   public static isLeapYear(year: number) {
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
   }

   public static getMonthsOfYear(year: number) {
      return [
         { name: "Janeiro", month: 0, total: 31 },
         {
            name: "Fevereiro",
            month: 1,
            total: this.isLeapYear(year) ? 29 : 28,
         },
         { name: "Março", month: 2, total: 31 },
         { name: "Abril", month: 3, total: 30 },
         { name: "Maio", month: 4, total: 31 },
         { name: "Junho", month: 5, total: 30 },
         { name: "Julho", month: 6, total: 31 },
         { name: "Agosto", month: 7, total: 31 },
         { name: "Setembro", month: 8, total: 30 },
         { name: "Outubro", month: 9, total: 31 },
         { name: "Novembro", month: 10, total: 30 },
         { name: "Dezembro", month: 11, total: 31 },
      ];
   }

   public static getMonthOfYear(year: number, month: number) {
      return this.getMonthsOfYear(year)[month];
   }
}

class Global {
   constructor(
      public readonly constants = {
         routesApi: {
            note: "http://localhost:3000/api/note",
            task: "http://localhost:3000/api/task",
            signIn: "http://localhost:3000/api/signIn",
            register: "http://localhost:3000/api/register",
         },
      },
      public readonly utils = Utils
   ) {}
}

export const global = new Global();
