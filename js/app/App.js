import BoardView from "./view/BoardView.js";

export default class App {

    constructor() {
        this.setUp();
    }

    setUp() {
        this.board = new BoardView();
    }

}