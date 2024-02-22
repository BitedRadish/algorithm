function solution(input) {
    const [n, weight] = input[0];
    let b = [[0, 0], ...input.slice(1)];

    const dp = Array(n + 1)
        .fill(0)
        .map((_) => Array(weight + 1).fill(0));
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= weight; j++) {
            // w는 무게 , v는 가치
            const [w, v] = b[i];
            if (w <= j) {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - w] + v);
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    console.log(dp.map((el) => el.join(" ")).join("\n"));
    console.log(dp[n][weight]);
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
    input.push(line.split(" ").map((el) => parseInt(el)));
}).on("close", () => {
    solution(input);
    process.exit();
});
