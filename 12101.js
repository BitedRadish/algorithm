function solution(input) {
    const [n, k] = input;

    const arr = [1, 2, 3];

    const result = [];
    const temp = [];

    const dfs = (sum) => {
        if (sum === n) {
            result.push(temp.slice());
            return;
        }

        for (let i = 0; i < 3; i++) {
            sum += arr[i];
            if (sum <= n) {
                temp.push(arr[i]);
                dfs(sum);
                temp.pop(arr[i]);
            }
            sum -= arr[i];
        }
    };
    dfs(0);
    console.log(result[k - 1] ? result[k - 1].join("+") : -1);
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    solution(line.split(" ").map(Number));
    process.exit();
});
