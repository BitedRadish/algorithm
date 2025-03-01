// 20:35
function solution(input) {
    const n = input;
    const dp = Array.from({ length: n }).fill(0);

    dp[1] = 0;

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + 1;
        // 3번 조건 때문에 1뺀 얘의 dp 값에 1을 더한다
        if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
        if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }
    console.log(dp[n]);
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    solution(Number(line));
    process.exit();
});
