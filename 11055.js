function solution(input) {
    const n = +input[0];
    const arr = input[1].slice();

    const dp = [arr[0]];

    for (let i = 1; i < n; i++) {
        let max = 0;
        for (let j = 0; j < i; j++) {
            if (arr[j] < arr[i] && dp[j] > max) {
                max = dp[j];
            }
        }
        dp[i] = max + arr[i];
    }
    console.log(Math.max(...dp));
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
