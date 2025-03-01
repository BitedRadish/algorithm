// 20:35
function solution(input) {
    const n = +input.shift();
    const dp = Array.from({ length: n }, () => Array(n).fill(BigInt(0)));
    const map = input.slice();

    dp[0][0] = BigInt(1);

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (dp[r][c] === 0 || (r === n - 1 && c === n - 1)) continue;
            const num = map[r][c];
            if (r + num < n) {
                dp[r + num][c] += BigInt(dp[r][c]);
                console.log(dp);
            }
            if (c + num < n) {
                dp[r][num + c] += BigInt(dp[r][c]);
                console.log(dp);
            }
        }
    }
    console.log(dp[n - 1][n - 1].toString());
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
