function solution(input) {
    // Q는 질문
    const [R, C, Q] = input[0];
    const arr = [];

    for (let i = 1; i < R + 1; i++) {
        arr.push(input[i]);
    }
    const rowSum = [];

    for (let i = 0; i < R; i++) {
        const row = arr[i].slice();
        for (let j = 1; j < C; j++) {
            row[j] += row[j - 1];
        }
        rowSum.push(row);
    }
    const results = [];
    for (let i = R + 1; i < R + 1 + Q; i++) {
        const [r1, c1, r2, c2] = input[i];
        const result = sectionSum(arr, rowSum, r1, c1, r2, c2);
        results.push(result);
    }
    console.log(results.join("\n"));
}

function sectionSum(arr, rowSum, x1, y1, x2, y2) {
    let sum = 0;
    let cnt = (y2 - y1 + 1) * (x2 - x1 + 1);

    if (x1 === x2 && y1 === y2) {
        return arr[x1 - 1][y1 - 1];
    } else {
        for (let i = x1 - 1; i <= x2 - 1; i++) {
            if (y1 === 1) {
                sum += rowSum[i][y2 - 1];
            } else {
                sum += rowSum[i][y2 - 1] - rowSum[i][y1 - 2];
            }
        }
    }
    const avg = sum / cnt;
    return Math.floor(avg);
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
    process.exit();
});
