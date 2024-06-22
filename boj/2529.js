function solution(input) {
    const k = +input[0];
    const visited = Array(10).fill(0);
    const sign = input[1].split(" ");
    const exp = Array.from({ length: 10 }, (_, idx) => [idx]);

    const answer = [];

    const dfs = (depth, cur, arr) => {
        if (depth === k) {
            answer.push(arr.join(""));
            return;
        }

        for (let i = 0; i < 10; i++) {
            const next = i;
            if (condition(cur, next, sign[depth]) && !visited[i]) {
                arr.push(i);
                visited[i] = 1;
                dfs(depth + 1, next, arr);
                arr.pop(i);
                visited[i] = 0;
            }
        }
    };

    const condition = (cur, next, sign) => {
        if (sign === "<") {
            if (cur < next) {
                return true;
            }
        } else if (sign === ">") {
            if (cur > next) {
                return true;
            }
        }
        return false;
    };

    for (let i = 0; i < 10; i++) {
        visited[i] = 1;
        dfs(0, +exp[i], exp[i]);
        visited[i] = 0;
    }

    console.log(answer[answer.length - 1]);
    console.log(answer[0]);
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    solution(input);
    process.exit();
});
