function solution(input) {
    const [n, k] = input[0];
    const coins = [0, ...input.slice(1).map((el) => +el)].sort((a, b) => a - b);
    const dp = [0, ...Array(k).fill(100001)];

    for (let i = 1; i <= n; i++) {
        // 동전 가치 별로 최소 경우의 수 갱신
        const coin = coins[i];

        for (let j = 1; j <= k; j++) {
            // coin>j 의 경우는 동전을 사용할 수 없는 경우
            if (coin <= j) {
                // coin[i-1] 동전 가치로 만들 수 있는 경우의 수 (dp[j])와 ,
                // 현재 동전 가치를 뺐을 때 ex) coin[i]=12이고 , j는 14일 때 ,
                // dp[2] => 즉 , 2를 만들 수 있는 최소 경우의 수
                // 둘을 비교하여 최솟 값을 dp 배열에 넣는다.
                dp[j] = Math.min(dp[j - coin] + 1, dp[j]);
            }
        }
    }
    dp[k] !== 100001 ? console.log(dp[k]) : console.log(-1);
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
