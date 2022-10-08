'use strict'

const rectangle = {
    width: 0,
    height: 0,
    get rePerim() {
        return 2 * (this.width + this.height) + " см";
    },
    set reWidth(val) {
        this.width;
    },
    set reHeight(val) {
        this.height;
    },
    get reSquare() {
        return this.width * this.height + " см";
    },
};
console.log(rectangle);