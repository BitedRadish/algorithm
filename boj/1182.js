function solution(input) {
    const [n, m] = input[0];
    const arr = input[1];

    // 주어진 정수가 0일 수도 있으니까 걍 넘어가면 안됨
    // 백트래킹이 아니라 걍 dfs 아님 ?
    // 총 탐색하는 경우의 수 2^(n-1) => 최대 2^19

    let cnt = 0;

    const dfs = (idx, sum) => {
        for (let i = idx; i < n; i++) {
            sum += arr[i];
            if (sum === m) ++cnt;
            dfs(i + 1, sum);
            sum -= arr[i];
        }
    };
    dfs(0, 0);
    console.log(cnt);
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
