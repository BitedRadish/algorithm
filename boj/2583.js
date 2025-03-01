// 22:04
function solution(input) {
    const [yLen, xLen, k] = input[0];
    const position = input.slice(1);
    const map = Array.from({ length: yLen }, () => Array(xLen).fill(0));

    for (let i = 0; i < k; i++) {
        const [x1, y1, x2, y2] = position[i];

        for (let y = yLen - y2; y < yLen - y1; y++) {
            for (let x = x1; x < x2; x++) {
                map[y][x] = 1;
            }
        }
    }

    let ans = 0;
    const arr = [];

    const drc = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];
    const bfs = (r, c) => {
        let cnt = 1;
        const queue = [[r, c]];
        let head = 0;
        while (queue.length > head) {
            const [curR, curC] = queue[head++];
            for (let i = 0; i < 4; i++) {
                const [nextR, nextC] = [curR + drc[i][0], curC + drc[i][1]];
                if (nextR >= 0 && nextC >= 0 && nextR < yLen && nextC < xLen) {
                    if (!map[nextR][nextC]) {
                        cnt++;
                        map[nextR][nextC] = -1;
                        queue.push([nextR, nextC]);
                    }
                }
            }
        }
        arr.push(cnt);
    };
    for (let r = 0; r < yLen; r++) {
        for (let c = 0; c < xLen; c++) {
            if (!map[r][c]) {
                ans++;
                map[r][c] = 1;
                bfs(r, c);
            }
        }
    }

    console.log(ans);
    console.log(arr.sort((a, b) => a - b).join(" "));
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
