export class ConnectFour {
    board: number[][];

    constructor() {
        this.board = [];
        for (let i = 0; i < 7; i++) {
            this.board.push([0,0,0,0,0,0]);
        }
    }
    addPiece(i: number, player: number): void|String {
        if (i >= 7 || i < 0) return "Not a column";
        let col = this.board[i];
        let j;
        for (j = 0; j < 6; j++) {
            if (col[j] == 0) continue;
            if (j == 0) return "Too full";
            break;
        }
        col[j-1] == player;
    }
}