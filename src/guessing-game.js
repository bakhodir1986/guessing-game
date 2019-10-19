class GuessingGame {

    constructor() {
        this.min = 0
        this.max = 0
        this.gessedNum = 0
    }


    setRange(min, max) {
        //console.log(min)
        //console.log(max)
        this.min = min;
        this.max = max;
    }

    guess() {

        this.gessedNum = Math.ceil((this.min + this.max) / 2);
        //console.log(this.gessedNum)
        return this.gessedNum;
    }

    lower() {
        //this.min = min;
        this.max = this.gessedNum;
    }

    greater() {
        this.min = this.gessedNum;
    }
}

module.exports = GuessingGame;