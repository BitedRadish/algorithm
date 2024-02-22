// 쉬바 이건 두 팀일때만이었음
function solution(input) {
    const n = +input[0];
    const board = input.slice(1);

    const combSum = [];

    const temp = [];
    const combination = [];

    // 조합의 경우의 수 구하기
    const dfs = (idx, depth) => {
        if (depth === n / 2 + 1) {
            return combination.push(temp.slice());
        }
        for (let i = idx; i < n; i++) {
            temp.push(i);
            dfs(i + 1, depth + 1);
            temp.pop();
        }
    };
    dfs(0, 1);

    for (let i = 0; i < combination.length; i++) {
        let comb = combination[i];
        let sum = 0;
        for (let j = 0; j < comb.length - 1; j++) {
            for (let k = j + 1; k < comb.length; k++) {
                sum += board[comb[j]][comb[k]] + board[comb[k]][comb[j]];
            }
        }
        combSum.push(sum);
    }

    let min = Math.abs(combSum[0] - combSum[combSum.length - 1]);
    for (let i = 1; i < combSum.length / 2; i++) {
        const diff = Math.abs(combSum[i] - combSum[combSum.length - 1 - i]);
        diff < min ? (min = diff) : min;
    }
    console.log(min);
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
