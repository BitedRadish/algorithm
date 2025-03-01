function solution(input) {
    // n은 데이터의 길이, m은 window 사이즈
    const [n, k] = input[0];
    const b = input.slice(1).sort((a, b) => a[0] - b[0]);

    // dp는 가치의 최댓값들을 메모이제이션 해두는 곳
    const dp = Array.from({ length: n }).fill(-1);

    for (let i = 0; i < n; i++) {
        // 기준점
        const [w, v] = b[i];
        // dp는 이전 가치의 최댓값을 구하는 것
        let max = 0;
        for (let j = 0; j < i; j++) {
            const [wj, vj] = b[j];
            if (wj + w <= k && dp[j] > max) {
                max = dp[j];
            }
        }
        dp[i] = max + v;
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
