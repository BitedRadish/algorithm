// 20:35
function solution(input) {
    const n = input.shift();
    const dp = [];

    dp[0] = input[0];
    dp[1] = input[0] + input[1];
    dp[2] = Math.max(input[1] + input[2], dp[1], input[0] + input[2]);
    for (let i = 3; i < n; i++) {
        dp[i] = Math.max(
            dp[i - 2] + input[i],
            dp[i - 1],
            dp[i - 3] + input[i - 1] + input[i]
        );
    }
    console.log(dp[n - 1]);
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
