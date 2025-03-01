// 19:48
function solution(input) {
    // 가로, 세로, 높이
    const [m, n, h] = input.shift();
    // 인덱스가 낮을 수록 아래 상자
    const box = [];

    for (let cnt = 0; cnt < h; cnt++) {
        box.push(input.slice(cnt * n, n + cnt * n));
    }
    let [rippen, unrippen] = getRippen(h, n, m, box);

    if (unrippen === 0) return console.log(0);

    const visited = Array.from({ length: h }, () =>
        Array.from({ length: n }, () => Array(m).fill(0))
    );

    // r,c,z 순
    const drcz = [
        [0, 1, 0],
        [0, -1, 0],
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
    ];

    const bfs = (rippenBox) => {
        const queue = [...rippenBox];
        let answer = 0;
        let head = 0;
        while (head < queue.length) {
            const [curR, curC, curZ, cnt] = queue[head++];
            visited[curZ][curR][curC] = 1;
            for (let i = 0; i < 6; i++) {
                const [nextR, nextC, nextZ] = [
                    curR + drcz[i][0],
                    curC + drcz[i][1],
                    curZ + drcz[i][2],
                ];
                if (
                    nextR >= 0 &&
                    nextC >= 0 &&
                    nextZ >= 0 &&
                    nextR < n &&
                    nextC < m &&
                    nextZ < h
                ) {
                    if (
                        !visited[nextZ][nextR][nextC] &&
                        box[nextZ][nextR][nextC] === 0
                    ) {
                        queue.push([nextR, nextC, nextZ, cnt + 1]);
                        box[nextZ][nextR][nextC] = 1;
                        unrippen--;
                    }
                }
            }
            answer = cnt;
        }
        return answer;
    };
    const min = bfs(rippen);

    console.log(unrippen !== 0 ? "-1" : min);
}

function getRippen(h, n, m, box) {
    const rippen = [];
    let unrippen = 0;

    for (let i = 0; i < h; i++) {
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < m; c++) {
                if (box[i][r][c] === 1) {
                    rippen.push([r, c, i, 0]);
                }
                if (box[i][r][c] === 0) unrippen++;
            }
        }
    }

    return [rippen, unrippen];
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
