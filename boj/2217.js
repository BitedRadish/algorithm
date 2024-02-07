function solution(input) {
    const n = input[0][0];

    const ropes = [];

    for (let i = 1; i < n + 1; i++) {
        ropes.push(input[i][0]);
    }
    ropes.sort((a, b) => a - b);
    const wRopes = ropes.map((el, idx) => {
        return el * (n - idx);
    });
    console.log(Math.max(...wRopes));
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
