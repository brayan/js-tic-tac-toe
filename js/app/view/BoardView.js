export default class BoardView {

    constructor(width, height) {
        this.width = width;
        this.height = height; 
        this.setUp();
        // this.drawBoard();
    }

    setUp() {
        /*this.canvas = document.querySelector("#myCanvas");
        this.canvas.addEventListener('click', (e) => {
            console.log("onclick canvas");
            console.log(e);
        });*/


        this.square1 = document.querySelector("#square1");
        this.square2 = document.querySelector("#square2");
        this.square3 = document.querySelector("#square3");
        this.square4 = document.querySelector("#square4");
        this.square5 = document.querySelector("#square5");
        this.square6 = document.querySelector("#square6");
        this.square7 = document.querySelector("#square7");
        this.square8 = document.querySelector("#square8");
        this.square9 = document.querySelector("#square9");

        this.square1.addEventListener('click', (e) => console.log("square1"));
        this.square2.addEventListener('click', (e) => console.log("square2"));
        this.square3.addEventListener('click', (e) => console.log("square3"));
        this.square4.addEventListener('click', (e) => console.log("square4"));
        this.square5.addEventListener('click', (e) => console.log("square5"));
        this.square6.addEventListener('click', (e) => console.log("square6"));
        this.square7.addEventListener('click', (e) => console.log("square7"));
        this.square8.addEventListener('click', (e) => console.log("square8"));
        this.square9.addEventListener('click', (e) => console.log("square9"));
    }

    drawBoard() {
        const context = this.canvas.getContext("2d");
        this.drawVerticalLines(context);
        this.drawHorizontalLines(context);
    }

    drawVerticalLines(context) {
        context.beginPath();
        context.moveTo(266, 20);
        context.lineTo(266, 450);
        context.stroke();

        context.beginPath();
        context.moveTo(400, 20);
        context.lineTo(400, 450);
        context.stroke();
    }

    drawHorizontalLines(context) {
        context.beginPath();
        context.moveTo(50, 200);
        context.lineTo(600, 200);
        context.stroke();

        context.beginPath();
        context.moveTo(50, 300);
        context.lineTo(600, 300);
        context.stroke();
    }

}