function solution(input) {
    const t = input.shift();

    let max = Math.max(...input);

    const dp = Array.from({ length: max + 1 });
    dp[1] = 1;
    for (let i = 2; i <= max; i++) {
        if (i % 2 === 0) {
            dp[i] = dp[i - 1] + dp[i / 2];
        } else {
            dp[i] = dp[i - 1];
        }
    }

    const ans = [];

    input.forEach((i) => {
        ans.push(dp[i]);
    });

    console.log(ans.join("\n"));
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
