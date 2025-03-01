function solution(input) {
    const n = +input[0];
    const arr = input[1].slice();

    const dp = [1];

    for (let i = 1; i < n; i++) {
        // 최댓값 갱신
        let max = 0;
        for (let j = 0; j < i; j++) {
            if (arr[j] < arr[i] && dp[j] > max) {
                max = dp[j];
            }
        }
        // 최댓값 갱신
        dp[i] = max + 1;
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
