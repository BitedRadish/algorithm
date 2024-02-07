const { error } = require("console");

function solution(input) {
    // 연산을 진행할 횟수
    const n = input[0][0];
    // 연산 대상
    const inputArr = input[1];
    // 합 저장 배열 , 역순부터 저장
    const b = [];

    let sum = 0;
    let j = 0;

    for (let i = inputArr.length - 1; i > 0; i--) {
        if (b.length !== 0) {
            b.push(b[j] + inputArr[i]);
            j++;
        } else {
            b.push(inputArr[i]);
        }
    }
    console.log(b);
    let t = b.length - 1;
    for (let i = 0; i < inputArr.length - 1; i++) {
        sum += inputArr[i] * b[t];
        t--;
    }
    console.log(sum);
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
    input.push(line.split(" ").map((el) => parseInt(el)));
}).on("close", function () {
    solution(input);
    process.exit();
});
