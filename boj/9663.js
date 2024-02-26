function solution(input) {
    const n = input;

    const queens = [];
    const possible = (row, col) => {
        for (let [r, c] of queens) {
            if (r === row || c === col) return false;
            if (Math.abs(r - row) === Math.abs(c - col)) return false;
        }
        return true;
    };

    let cnt = 0;
    const dfs = (row) => {
        if (row === n) cnt++;
        for (let col = 0; col < n; col++) {
            if (possible(row, col)) {
                queens.push([row, col]);
                dfs(row + 1);
                queens.pop();
            }
        }
    };
    dfs(0);
    console.log(cnt);
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    solution(parseInt(line));
    process.exit();
});
