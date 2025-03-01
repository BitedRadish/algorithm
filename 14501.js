function solution(input) {
    const n = +input.shift();
    // arr의 인덱스는 일자
    const arr = input.slice();

    // dp의 인덱스는 일자,값은 최대 보상
    const dp = Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        const [p, m] = input[i];
        if (i + p > n) continue;
        dp[i] = dp[i] + m;

        for (let j = i + p; j < n; j++) {
            dp[j] = Math.max(dp[j], dp[i]);
        }
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
