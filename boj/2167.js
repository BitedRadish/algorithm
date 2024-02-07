function solution(input) {
    const [n, m] = input[0];
    // 원본 배열
    const arr = [];
    for (let i = 1; i < n + 1; i++) {
        arr.push(input[i]);
    }
    const k = input[n + 1];

    // 누적합 배열 만들기
    const rowSum = [];

    for (let i = 0; i < arr.length; i++) {
        const row = arr[i].slice();
        for (let j = 1; j < row.length; j++) {
            row[j] += row[j - 1];
        }
        rowSum.push(row);
    }

    const resultArr = [];

    for (let i = 0; i < k; i++) {
        const [x1, y1, x2, y2] = input[n + 2 + i];

        const result = sectionSum(arr, rowSum, x1, y1, x2, y2);
        resultArr.push(result);
    }
    console.log(resultArr.join("\n"));
}

function sectionSum(arr, rowSum, x1, y1, x2, y2) {
    let sum = 0;

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
    return sum;
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
