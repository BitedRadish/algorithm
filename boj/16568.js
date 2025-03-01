// 20:35
function solution(input) {
    const [N, a, b] = input.shift();

    // 맨 앞으로 가기 위한 최솟값
    const dp = Array.from({ length: N + 1 }).fill(0);

    // i가 정확히 의미하는 바는 무엇 ?-> 한길이 앞에 i명이 남아있는 상태에서
    // 맨 앞까지 가는 데 걸리는 시간
    for (let i = 1; i <= N; i++) {
        dp[i] = dp[i - 1] + 1;
        // +1은 기다리기
        if (i - a - 1 >= 0) dp[i] = Math.min(dp[i], dp[i - a - 1] + 1);
        if (i - b - 1 >= 0) dp[i] = Math.min(dp[i], dp[i - b - 1] + 1);
    }
    console.log(dp[N]);
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
    input.push(line.split(" ").map(Number));
    solution(input);
    process.exit();
});
