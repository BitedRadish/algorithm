function solution(input) {
    const n = +input[0];
    const arr = input.slice(1);
    arr.sort((a, b) => {
        return a[1] - b[1];
    });
    console.log(arr);
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
