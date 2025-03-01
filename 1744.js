// 12:04
// 음수는 없애는게 제일 중요
// 음수 큰 애들끼리는 각자 무조건 쌍으로 만들어서 곱하고
// 0과 양수는 절대 곱하지 않는다.

function solution(input) {
    const n = +input.shift();
    const arr = input.slice().sort();

    const positive = [];
    const negative = [];

    arr.forEach((el) => {
        if (el > 0) positive.push(el);
        else {
            negative.push(el);
        }
    });

    positive.sort((a, b) => b - a);
    negative.sort((a, b) => a - b);

    let sum = 0;
    for (let i = 0; i < positive.length; i++) {
        if (
            positive[i + 1] !== undefined &&
            positive[i] !== 1 &&
            positive[i + 1] !== 1
        ) {
            sum += positive[i] * positive[i++ + 1];
        } else {
            sum += positive[i];
        }
    }

    for (let i = 0; i < negative.length; i++) {
        if (negative[i + 1] !== undefined) {
            sum += negative[i] * negative[i++ + 1];
        } else {
            sum += negative[i];
        }
    }
    console.log(sum);
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
    input.push(Number(line));
}).on("close", () => {
    solution(input);
    process.exit();
});
