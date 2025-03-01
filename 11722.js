function solution(input) {
    const n = +input[0];
    const arr = input[1].slice();

    // 인덱스별 자기 최대 길이 갯수
    const memo = [1];

    for (let i = 1; i < n; i++) {
        let max = 0;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[i] && memo[j] > max) max = memo[j];
        }
        memo[i] = max + 1;
    }
    console.log(Math.max(...memo));
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
