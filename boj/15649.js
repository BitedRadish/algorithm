function solution(input) {
    const [n, m] = input;

    const visited = Array(n + 1).fill(false);
    const output = [];
    let result = "";

    const dfs = (depth) => {
        if (depth === m) {
            result += `${output.join(" ")}\n`;
            return;
        }

        for (let i = 1; i <= n; i++) {
            if (!visited[i]) {
                visited[i] = true;
                output.push(i);
                dfs(depth + 1);
                visited[i] = false;
                output.pop(i);
            }
        }
    };
    dfs(0);

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
