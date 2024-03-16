function solution(input) {
    const n = +input[0];
    const arr = input[1];

    const dp = [1];
    let dpExp = [[arr[0]]];
    for (let i = 1; i < arr.length; i++) {
        let max = 0;
        let maxIdx = -1;
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j] && dp[j] > max) {
                max = dp[j];
                maxIdx = j;
            }
        }
        // 전체 dp 배열 값 갱신
        dp[i] = max + 1;
        dpExp[i] = maxIdx === -1 ? [arr[i]] : dpExp[maxIdx].concat(arr[i]);
    }

    const ans = Math.max(...dp);
    const exp = dpExp[dp.indexOf(ans)].join(" ");

    console.log(ans);
    console.log(exp);
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
