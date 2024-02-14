function solution(input) {
    const n = input[0][0];
    const arr = input[1];

    const dp = [1];
    for (let i = 1; i < n; i++) {
        // max가 0이라는 것은 가장 긴 부분 수열이 0이라는 것
        let max = 0;
        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j] && dp[j] > max) {
                max = dp[j];
            }
        }
        // 자기 자신은 가장 긴 수열의 부분이니까 0일 때도 , 1을 더해줘야 함.
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
