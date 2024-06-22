function solution(input) {
    const str1 = input[0];
    const str2 = input[1];

    const dp = Array.from({ length: str2.length + 1 }, () =>
        Array(str1.length + 1).fill(0)
    );
    let ans = Number.MIN_SAFE_INTEGER;

    for (let r = 0; r < str2.length; r++) {
        for (let c = 0; c < str1.length; c++) {
            if (str1[c] === str2[r]) {
                dp[r + 1][c + 1] = Math.max(dp[r][c] + 1, dp[r + 1][c + 1] + 1);
            }
            if (dp[r + 1][c + 1] > ans) {
                ans = dp[r + 1][c + 1];
            }
        }
    }
    console.log(ans);
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    solution(input);
    process.exit();
});
