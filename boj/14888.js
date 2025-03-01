// 18:25
//
function solution(input) {
    const n = +input[0];

    const arr = input[1];
    const oper = input[2];

    const ans = [];
    // 씹 0과 -0?
    const dfs = (target, sum, operator) => {
        if (operator === 0) {
            sum += arr[target];
        } else if (operator === 1) {
            sum -= arr[target];
        } else if (operator === 2) {
            sum *= arr[target];
        } else if (operator === 3) {
            if (sum < 0) {
                sum *= -1;
                sum /= arr[target];
                sum = Math.floor(sum);
                sum *= -1;
            } else {
                sum /= arr[target];
                sum = Math.floor(sum);
            }
        }

        if (target === n - 1) {
            ans.push(sum);
            return;
        }

        for (let i = 0; i < 4; i++) {
            if (oper[i] > 0) {
                oper[i]--;
                dfs(target + 1, sum, i);
                oper[i]++;
            }
        }
    };
    dfs(0, 0, 0);
    console.log(Math.max(...ans) ? Math.max(...ans) : 0);
    console.log(Math.min(...ans) ? Math.min(...ans) : 0);
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
