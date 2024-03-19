function solution(input) {
    const n = +input[0];
    const arr = input[1].sort((a, b) => a - b);

    let left = 0;
    let right = n - 1;

    let min = Number.MAX_SAFE_INTEGER;

    let ans = [];

    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === 0) {
            ans = [arr[left], arr[right]];
            return console.log(ans.join(" "));
        }

        if (Math.abs(sum) < min) {
            min = Math.abs(sum);
            ans = [arr[left], arr[right]];
        }

        if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
    console.log(ans.join(" "));
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
