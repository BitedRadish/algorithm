function solution(input) {
    const board = input;

    const findEmpty = () => {
        const arr = [];
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === 0) {
                    arr.push([r, c]);
                }
            }
        }
        return arr;
    };

    const isPossible = (r, c, num) => {
        const row = Math.floor(r / 3) * 3;
        const col = Math.floor(c / 3) * 3;

        for (let i = row; i < row + 3; i++) {
            for (let j = col; j < col + 3; j++) {
                if (board[i][j] === num) return false;
            }
        }

        for (let i = 0; i < 9; i++) {
            if (board[r][i] === num) return false;
            if (board[i][c] === num) return false;
        }

        return true;
    };

    const emptyArr = findEmpty();

    const dfs = (turn) => {
        // 이 부분 참고함
        if (turn === emptyArr.length) {
            console.log(board.map((el) => el.join(" ")).join("\n"));
            process.exit();
        }

        let [r, c] = emptyArr[turn];

        for (let num = 1; num <= 9; num++) {
            if (isPossible(r, c, num)) {
                board[r][c] = num;
                dfs(turn + 1);
                board[r][c] = 0;
            }
        }
    };
    dfs(0);
}
const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
    input.push(line.split(" ").map((el) => parseInt(el)));
}).on("close", () => {
    solution(input);
});
