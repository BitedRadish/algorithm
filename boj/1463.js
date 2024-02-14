function solution(input) {
    let n = input;

    const memo = [0, 0];

    // 2의 배수이면서 , 3의 배수인 것까지 고려하려면 else if문을 사용하면 안됨.
    for (let i = 2; i <= n; i++) {
        memo[i] = memo[i - 1] + 1;

        if (i % 2 === 0) {
            memo[i] = Math.min(memo[i], memo[i / 2] + 1);
        }
        if (i % 3 === 0) {
            memo[i] = Math.min(memo[i], memo[i / 3] + 1);
        }
    }
    console.log(memo[n]);
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    solution(parseInt(line));
    process.exit();
});
