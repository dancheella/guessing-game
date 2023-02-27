class GuessingGame {
    constructor() {
        this.min = null; // минимальное значение диапазона
        this.max = null; // максимальное значение диапазона
        this.guessNumber = null; // предполагаемое число
    }

    setRange(min, max) { // установка минимального и максимального значений диапазона.
        this.min = min;
        this.max = max;
    }

    guess() {
        this.guessNumber = Math.round((this.max + this.min) / 2); // находим среднее значение между минимальным и максимальным значением диапазона и округляем до целого числа
        return this.guessNumber; // возвращаем предполагаемое число
    }

    lower() {
        this.max = this.guessNumber; // устанавливаем новое максимальное значение диапазона, которое меньше предполагаемого числа
    }

    greater() {
        this.min = this.guessNumber; // устанавливаем новое минимальное значение диапазона, которое больше предполагаемого числа
    }
}

module.exports = GuessingGame;
