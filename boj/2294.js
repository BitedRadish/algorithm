function solution(input) {
    const [n, k] = input[0];
    const coins = [0];

    for (let i = 1; i <= n; i++) {
        coins.push(+input[i]);
    }
    coins.sort((a, b) => a - b);
    const memo = [0, ...Array(k).fill(1000001)];

    for (let i = 1; i <= n; i++) {
        const coin = coins[i];
        for (let j = 1; j <= k; j++) {
            if (coin <= j) {
                memo[j] = Math.min(memo[j - coin] + 1, memo[j]);
            }
        }
    }
    memo[k] === 1000001 ? console.log(-1) : console.log(memo[k]);
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
