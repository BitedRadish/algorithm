function solution(input) {
    // 길이, 목표 합
    const [n, s] = input.shift();
    // sort를 갈기면ㅇ ㅏㄴ되나 봄
    const arr = input[0].slice();

    let min = Infinity;

    let start = 0;
    let end = 0;

    let sum = arr[start];
    let len = 1;

    while (true) {
        if (start === 0 && end === n) {
            return console.log(0);
        }
        if (start >= n || end >= n) break;

        if (sum < s) {
            sum += arr[++end];
            ++len;
        } else {
            min = Math.min(min, len);
            sum -= arr[start++];
            --len;
        }
    }
    console.log(min);
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
    input.push(line.split(" ").map(Number));
}).on("close", () => {
    solution(input);
    process.exit();
});
