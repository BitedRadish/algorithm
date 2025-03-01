// 18:18
function solution(input) {
    // 요소 갯수, 차이
    const [n, m] = input[0];
    const arr = input.slice(1).sort((a, b) => a - b);

    let start = 0;
    let end = 0;

    let min = Infinity;

    while (start < n && end < n && start <= end) {
        const diff = arr[end] - arr[start];
        if (diff >= m) {
            min = Math.min(diff, min);
            start++;
        } else {
            end++;
        }
    }
    console.log(min);
}
const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
let idx = 0;
rl.on("line", (line) => {
    if (idx === 0) {
        input.push(line.split(" ").map(Number));
    } else {
        input.push(Number(line));
    }
    idx++;
}).on("close", () => {
    solution(input);
    process.exit();
});
