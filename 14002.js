// 1:00
function solution(input) {
    const n = +input.shift();
    const arr = input[0];

    const dp = [1];
    const dpExp = [[arr[0]]];
    for (let i = 1; i < arr.length; i++) {
        let max = 0;
        let maxIdx = -1;

        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j] && dp[j] > max) {
                max = dp[j];
                maxIdx = j;
            }
        }
        dp[i] = max + 1;
        dpExp[i] = maxIdx === -1 ? [arr[i]] : dpExp[maxIdx].concat(arr[i]);
    }

    const max = Math.max(...dp);

    console.log(max);
    console.log(dpExp[dp.indexOf(max)].join(" "));
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
