function solution(input) {
    const n = +input[0];
    if (n === 1) return console.log(0);

    const arr = input[1].sort((a, b) => a - b);
    const target = +input[2];
    let cnt = 0;

    let left = 0;
    let right = n - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) {
            cnt++;
            right--;
        } else if (sum > target) {
            right--;
        } else {
            left++;
        }
    }
    console.log(cnt);
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
