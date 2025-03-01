// 16:12
function solution(input) {
    // 문자열의 길이는 서로 다를 수 있음
    const first = input[0];
    const second = input[1];

    const dp = Array.from({ length: first.length + 1 }, () =>
        Array.from({ length: second.length + 1 })
    );
    for (let i = 0; i < first.length + 1; i++) {
        dp[i][0] = 0;
    }
    for (let i = 0; i < second.length + 1; i++) {
        dp[0][i] = 0;
    }

    for (let i = 1; i < first.length + 1; i++) {
        for (let j = 1; j < second.length + 1; j++) {
            if (first[i - 1] === second[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
            }
        }
    }
    console.log(dp[first.length][second.length]);

    // 문자가 같지 않으면 이전 dp값에 +1
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
    input.push(line.split(""));
}).on("close", () => {
    solution(input);
    process.exit();
});
