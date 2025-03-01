// 20:35
function solution(input) {
    const n = +input.shift();
    const arr = input[0].slice();

    const dp = Array.from({ length: n - 1 }, () => Array(21).fill(BigInt(0)));
    dp[0][arr[0]] = BigInt(1);

    for (let i = 1; i < n - 1; i++) {
        for (let j = 0; j <= 20; j++) {
            if (j - arr[i] >= 0) {
                dp[i][j] += dp[i - 1][j - arr[i]];
            }
            if (j + arr[i] <= 20) {
                dp[i][j] += dp[i - 1][j + arr[i]];
            }
        }
    }
    console.log(dp);
    console.log(dp[n - 2][arr[n - 1]].toString());
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
