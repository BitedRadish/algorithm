function solution(input) {
    const n = input[0];
    const tc = input.slice(1);

    // 0을 만드는 경우의 수는 1 , 1을 만드는 경우의 수 1 , 2를 만드는 경우의 수 2
    const memo = [1, 1, 2];

    const cases = (t) => {};
    for (let i = 3; i <= Math.max(...tc); i++) {
        memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3];
    }

    for (let i = 0; i < n; i++) {
        console.log(memo[tc[i]]);
    }
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
