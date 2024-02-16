function solution(input) {
    const n = input[0];
    const drinks = [];
    let cnt = 0;

    for (let i = 1; i <= n; i++) {
        drinks.push(input[i]);
    }

    const dp = [];
    dp[0] = drinks[0];
    dp[1] = drinks[0] + drinks[1];
    dp[2] = Math.max(drinks[1] + drinks[2], dp[1], drinks[0] + drinks[2]);

    for (let i = 3; i < n; i++) {
        dp[i] = Math.max(
            dp[i - 3] + drinks[i - 1] + drinks[i],
            dp[i - 2] + drinks[i],
            dp[i - 1]
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
    input.push(parseInt(line));
}).on("close", () => {
    solution(input);
    process.exit();
});
