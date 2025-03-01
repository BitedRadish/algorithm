function solution(input) {
    // n은 데이터의 길이, m은 window 사이즈
    const [n, m] = input[0];
    const T = input[1].slice();

    let sum = T.slice(0, m).reduce((acc, val) => acc + val, 0);

    let max = sum;

    for (let i = 1; i <= n - m; i++) {
        sum = sum - T[i - 1] + T[i + m - 1];
        if (sum > max) max = sum;
    }
    console.log(max);
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
