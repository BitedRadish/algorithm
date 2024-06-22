function solution(input) {
    // m은 가로 , n은 세로
    const [m, n] = input[0];

    const tomatoes = input.slice(1);

    // row , column 기준 상,좌,하,우
    const drc = [
        [-1, 0],
        [0, -1],
        [1, 0],
        [0, 1],
    ];

    const visited = Array.from({ length: n }, () => Array(m).fill(0));

    // 최소 일수를 구하는 문제이며 , 인접 정점들에 대한 것들을 모두 구해야 함 .
    const queue = [];
    tomatoes.forEach((tomato, row) => {
        tomato.forEach((t, col) => {
            if (t === 1) {
                queue.push([row, col]);
            }
            if (t === 0) {
                visited[row][col] = -1;
            }
        });
    });
    const bfs = () => {
        let head = 0;

        while (queue.length > head) {
            const [curR, curC] = queue[head++];
            for (let i = 0; i < 4; i++) {
                const [nextR, nextC] = [curR + drc[i][0], curC + drc[i][1]];
                if (nextR >= 0 && nextC >= 0 && nextC < m && nextR < n) {
                    if (visited[nextR][nextC] < 0) {
                        visited[nextR][nextC] = visited[curR][curC] + 1;
                        queue.push([nextR, nextC]);
                    }
                }
            }
        }
    };
    bfs();

    let cnt = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            // 익지 않은 토마토가 있음
            if (visited[i][j] === -1) {
                console.log(-1);
                return;
            }
            cnt = Math.max(cnt, visited[i][j]);
        }
    }
    console.log(cnt);
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

//
