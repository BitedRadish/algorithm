// 16:40
// 최솟값 , 최댓값 구한 후에 그거만큼 반복해야 되ㄴ 거 ?
function solution(input) {
    const n = +input.shift();
    const map = input.slice();

    const flatMap = input.flat();
    const [min, max] = [Math.min(...flatMap), Math.max(...flatMap)];

    const ansArr = [];

    const drc = [
        [0, -1],
        [0, 1],
        [-1, 0],
        [1, 0],
    ];

    const a = (rain) => {
        const dfs = (pos) => {
            let stack = [pos];
            while (stack.length) {
                const len = stack.length;
                for (let i = 0; i < len; i++) {
                    const [curR, curC] = stack.pop();
                    for (let j = 0; j < drc.length; j++) {
                        const [nextR, nextC] = [
                            curR + drc[j][0],
                            curC + drc[j][1],
                        ];

                        if (
                            nextR >= 0 &&
                            nextC >= 0 &&
                            nextR < n &&
                            nextC < n
                        ) {
                            if (
                                map[nextR][nextC] > rain &&
                                !visited[nextR][nextC]
                            ) {
                                visited[nextR][nextC] = 1;
                                stack.push([nextR, nextC]);
                            }
                        }
                    }
                }
            }
        };
        // 임시 값
        const visited = Array.from({ length: n }, () =>
            Array.from({ length: n }).fill(0)
        );
        let temp = 0;

        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                if (map[r][c] > rain && !visited[r][c]) {
                    visited[r][c] = 1;
                    dfs([r, c]);
                    temp++;
                }
            }
        }
        ansArr.push(temp);
    };
    for (let rain = min; rain <= max; rain++) {
        a(rain);
    }
    console.log(Math.max(...ansArr));
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
