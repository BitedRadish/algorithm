function solution(input) {
    const a = input[0];
    const b = input[1];

    const dp = Array.from({ length: Math.min(a.length, b.length) + 1 }).fill(0);

    for (let i = 1; i <= a.length; i++) {
        let prev = 0;
        for (let j = 1; j <= b.length; j++) {
            let temp = dp[j];
            if (a[i - 1] === b[j - 1]) {
                dp[j] = prev + 1;
            } else {
                dp[j] = Math.max(dp[j], dp[j - 1]);
            }
            prev = temp;
        }
    }
    console.log(dp);
    console.log(dp[b.length - 1]);
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
    input.push(line.split(""));
}).on("close", () => {
    solution(input);
    process.exit();
});
