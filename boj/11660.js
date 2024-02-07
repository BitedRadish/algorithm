function solution(input) {
    const N = input[0][0];
    const M = input[0][1];

    const arr = [];
    const rowSum = [];

    // 기본 배열 생성
    for (let i = 1; i < N + 1; i++) {
        arr.push(input[i]);
    }
    // 누적합 배열 만들기 (예상 문제 발생 지역)
    for (let i = 0; i < arr.length; i++) {
        const row = arr[i].slice();
        for (let j = 1; j < row.length; j++) {
            row[j] += row[j - 1];
        }
        rowSum.push(row);
    }
    const resultArr = [];
    for (let j = N + 1; j < N + M + 1; j++) {
        let [x1, y1, x2, y2] = input[j];

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
