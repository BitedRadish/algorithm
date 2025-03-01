// 15:22

// 33분
const START = 1;

function solution(input) {
    const [n, m] = input.shift();
    const ladder = input.slice(0, n).sort((a, b) => a[0] - b[0]);
    const snake = input.slice(n).sort((a, b) => a[0] - b[0]);

    // 즉, 뱀을 피해 사다리를 이용해라
    // 1부터 시작이니까
    const bfs = () => {
        const queue = [[START, 0]];
        const visited = Array.from({ length: 101 }).fill(false);
        visited[START] = true;

        let head = 0;

        while (head < queue.length) {
            const [cur, cnt] = queue[head++];
            if (cur === 100) return cnt;

            for (let dice = 1; dice <= 6; dice++) {
                let next = cur + dice;
                if (next > 100) break;

                ladder.forEach((l) => {
                    const [from, to] = l;
                    if (next === from && !visited[from]) {
                        visited[from] = true;
                        visited[to] = true;
                        queue.push([to, cnt + 1]);
                    }
                });

                snake.forEach((s) => {
                    const [from, to] = s;
                    if (next === from && !visited[from]) {
                        visited[from] = true;
                        visited[to] = true;
                        queue.push([to, cnt + 1]);
                    }
                });

                if (!visited[next]) {
                    visited[next] = true;
                    queue.push([next, cnt + 1]);
                }
            }
        }
    };
    const ans = bfs();
    console.log(ans);
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
