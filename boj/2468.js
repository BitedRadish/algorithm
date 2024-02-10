function solution(input) {
    const n = input[0][0];

    const map = [];

    for (let i = 1; i < n + 1; i++) {
        map.push(input[i]);
    }
    // 위 , 아래 , 오른쪽 , 왼쪽
    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, 1, -1];

    const maxH = getMax(map);
    const result = [];

    let visited = Array(n)
        .fill(0)
        .map(() => Array(n).fill(0));

    for (let h = 0; h <= maxH; h++) {
        let cnt = 0;

        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                if (map[r][c] > h && visited[r][c] === 0) {
                    visited[r][c] = 1;
                    dfs([r, c], h);
                    cnt++;
                }
            }
        }
        result.push(cnt);
        visited = Array(n)
            .fill(0)
            .map(() => Array(n).fill(0));
    }

    function dfs([r, c], h) {
        const stack = [[r, c]];
        while (stack.length) {
            const len = stack.length;
            for (let s = 0; s < len; s++) {
                const v = stack.pop();
                const [dfsR, dfsC] = v;
                for (let i = 0; i < dc.length; i++) {
                    const [nextR, nextC] = [dfsR + dr[i], dfsC + dc[i]];
                    if (
                        nextR >= 0 &&
                        nextR <= n - 1 &&
                        nextC >= 0 &&
                        nextC <= n - 1 &&
                        visited[nextR][nextC] === 0 &&
                        map[nextR][nextC] > h
                    ) {
                        stack.push([nextR, nextC]);
                        visited[nextR][nextC] = 1;
                    }
                }
            }
        }
    }
    console.log(Math.max(...result));

    function getMax(map) {
        const maxArr = map.map((el) => {
            return Math.max(...el);
        });

        return Math.max(...maxArr);
    }
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
