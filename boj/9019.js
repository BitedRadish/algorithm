// 백트래킹 or dp
function solution(input) {
    const n = +input.shift();

    const ans = [];

    const bfs = (from, to) => {
        const queue = [[from, ""]];
        let head = 0;
        const visited = Array.from({ length: 10000 }).fill(false);
        visited[from] = true;

        while (head < queue.length) {
            const [cur, cmd] = queue[head++];
            if (cur === to) return ans.push(cmd);
            const nextD = (cur * 2) % 10000;
            if (!visited[nextD]) {
                visited[nextD] = true;
                queue.push([nextD, cmd + "D"]);
            }

            const nextS = cur === 0 ? 9999 : cur - 1;
            if (!visited[nextS]) {
                visited[nextS] = true;
                queue.push([nextS, cmd + "S"]);
            }

            const nextL = (cur % 1000) * 10 + Math.floor(cur / 1000);
            if (!visited[nextL]) {
                visited[nextL] = true;
                queue.push([nextL, cmd + "L"]);
            }

            const nextR = (cur % 10) * 1000 + Math.floor(cur / 10);
            if (!visited[nextR]) {
                visited[nextR] = true;
                queue.push([nextR, cmd + "R"]);
            }
        }
    };

    for (let i = 0; i < n; i++) {
        const [from, to] = input[i].map(Number);
        bfs(from, to);
    }

    console.log(ans.join("\n"));
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
    input.push(line.split(" "));
}).on("close", () => {
    solution(input);
    process.exit();
});
