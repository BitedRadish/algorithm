// BFS
function solution(input) {
    const [n, m] = input[0].map((el) => parseInt(el));
    const arr = [Array(m + 1).fill(0)];
    // 오른쪽 , 아래 , 위 , 왼쪽
    const dr = [0, 1, -1, 0];
    const dc = [1, 0, 0, -1];

    for (let i = 1; i < n + 1; i++) {
        const f = Array.from(input[i][0]).map((el) => parseInt(el));
        arr.push([0, ...f]);
    }

    const bfs = () => {
        const visited = Array(n + 1)
            .fill(0)
            .map(() => Array(m + 1).fill(0));
        const queue = [];
        let min = 1;
        queue.push([1, 1]);
        visited[1][1] = 1;

        while (queue.length) {
            const len = queue.length;
            for (let i = 0; i < len; i++) {
                const rc = queue.shift();
                const [r, c] = rc;
                if (r === n && c === m) return min;
                for (let j = 0; j < dr.length; j++) {
                    const [nextR, nextC] = [r + dr[j], c + dc[j]];
                    if (
                        nextR <= n &&
                        nextC <= m &&
                        arr[nextR][nextC] === 1 &&
                        visited[nextR][nextC] === 0
                    ) {
                        queue.push([nextR, nextC]);
                        visited[nextR][nextC] = 1;
                    }
                }
            }
            min++;
        }
    };
    console.log(bfs());
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
