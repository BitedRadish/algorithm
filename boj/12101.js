function solution(input) {
    const [n, k] = input;
    const num = [1, 2, 3];

    const result = [];
    const temp = [];
    const dfs = (sum) => {
        if (sum === n) {
            const arr = temp.slice();
            result.push(arr);
        }

        for (let i = 0; i < 3; i++) {
            sum += num[i];
            if (sum <= n) {
                temp.push(num[i]);
                dfs(sum);
                temp.pop();
            }
            sum -= num[i];
        }
    };

    dfs(0);
    k > result.length ? console.log(-1) : console.log(result[k - 1].join("+"));
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    solution(line.split(" ").map((el) => parseInt(el)));
    process.exit();
});
