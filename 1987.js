function solution(input) {
    const [r, c] = input[0].map(Number);
    const board = input.slice(1).map((el) => el[0].split(""));

    const drc = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];

    let max = -Infinity;
    const alpha = Array(26).fill(0);
    alpha[board[0][0].charCodeAt() - 65] = 1;

    const dfs = (node, cnt) => {
        max = Math.max(cnt, max);
        const [curR, curC] = node;
        for (let i = 0; i < drc.length; i++) {
            const [nextR, nextC] = [curR + drc[i][0], curC + drc[i][1]];
            if (nextR >= 0 && nextC >= 0 && nextR < r && nextC < c) {
                const nextAlpha = board[nextR][nextC];
                if (!alpha[nextAlpha.charCodeAt() - 65]) {
                    alpha[nextAlpha.charCodeAt() - 65] = 1;
                    dfs([nextR, nextC], cnt + 1);
                    alpha[nextAlpha.charCodeAt() - 65] = 0;
                }
            }
        }
    };

    dfs([0, 0], 1);
    console.log(max);
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
    input.push(line.split(" "));
}).on("close", () => {
    solution(input);
    process.exit();
});
