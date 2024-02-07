function solution(input) {
    const arr = input[1];
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    console.log(min, max);
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
