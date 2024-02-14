function solution(input) {
    const n = input[0][0];
    const arr = input[1];

    const dp = [1];

    for (let i = 1; i < n; i++) {
        let max = 0;
        for (let j = 0; j < i; j++) {
            //dp[j] > max는 그냥 dp중에서 최댓값을 찾는 과정
            if (arr[i] > arr[j] && dp[j] > max) {
                max = dp[j];
            }
        }
        // 그 최댓값보다 1더 증가
        // dp[i]가 가장 작아서 아무 것도 없다면 dp[i]=1이 되는 것
        dp[i] = max + 1;
    }
    console.log(Math.max(...dp));
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
