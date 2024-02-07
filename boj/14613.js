function solution(input) {
    console.log(input);
    const [w, l, d] = input[0];
    // combination
    const c = console.log(w, l, d);
}
function factorial(r) {}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = [];
rl.on("line", (line) => {
    input.push(line.split(" ").map((el) => parseFloat(el)));
}).on("close", () => {
    solution(input);
    process.exit();
});
