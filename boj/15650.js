function solution(input) {
    const [n, m] = input;

    const output = [];
    let result = "";

    const dfs = (idx, depth) => {
        if (depth === m + 1) {
            result += `${output.join(" ")}\n`;
            return;
        }
        for (let i = idx; i <= n; i++) {
            output.push(i);
            dfs(i, depth + 1);
            output.pop();
        }
    };
    dfs(1, 1);
    console.log(result);
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    solution(line.split(" ").map((el) => parseInt(el)));
    process.exit();
});
