function solution(input) {
    const [n, m] = input[0];
    const set = new Set(input[1]);
    const arr = [0, ...set].sort((a, b) => a - b);

    const output = [];
    let result = "";

    const dfs = (depth) => {
        if (depth === m + 1) {
            result += `${output.join(" ")}\n`;
            return;
        }

        for (let i = 1; i < arr.length; i++) {
            output.push(arr[i]);
            dfs(depth + 1);
            output.pop();
        }
    };

    dfs(1);
    console.log(result);
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
