// bfs
function solution(input) {
    const n = input[0][0];
    const board = input.slice(1);

    // 크기가 같은 수의 물고기를 먹어야 레벨업

    // 상 , 우 , 하 , 좌

    const drc = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
    ];

    // 상어 현재 위치
    let [sr, sc] = [0, 0];
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (board[r][c] === 9) {
                [sr, sc] = [r, c];
            }
        }
    }

    const bShark = {
        r: sr,
        c: sc,
        exp: 0,
        size: 2,
    };

    const bfs = (r, c) => {
        const visited = Array(n)
            .fill(0)
            .map((_) => Array(n).fill(0));
        // 먹을 수 있는 물고기와 거리 저장 배열
        let fishes = [];
        // 0은 현재까지 이동한 거리
        const queue = [[r, c, 0]];
        visited[r][c] = 1;

        while (queue.length) {
            const len = queue.length;
            for (let i = 0; i < len; i++) {
                const [bfsR, bfsC, bfsD] = queue.shift();
                for (let d of drc) {
                    const [nr, nc, nd] = [bfsR + d[0], bfsC + d[1], bfsD + 1];
                    if (nr >= 0 && nr <= n - 1 && nc >= 0 && nc <= n - 1) {
                        if (
                            visited[nr][nc] === 0 &&
                            board[nr][nc] <= bShark.size
                        ) {
                            queue.push([nr, nc, nd]);
                            visited[nr][nc] = 1;
                            if (
                                board[nr][nc] !== 0 &&
                                board[nr][nc] < bShark.size
                            ) {
                                fishes.push([nr, nc, nd]);
                            }
                        }
                    }
                }
            }
        }
        return fishes.sort((a, b) => {
            // 거리가 같을 때 ,
            if (a[2] === b[2]) {
                // 행 , 즉 높이가 같을 때 , 가장 왼쪽에 있는 물고기 먼저
                if (a[0] === b[0]) return a[1] - b[1];
                // 높이가 같지 않다면 가장 위에 있는 물고기 먼저
                return a[0] - b[0];
            }
            // 거리가 가까운 애 먼저
            return a[2] - b[2];
        });
    };
    let sec = 0;
    while (true) {
        const fishesArr = bfs(bShark.r, bShark.c);
        if (fishesArr.length === 0) break;
        const [eatR, eatC, eatD] = fishesArr.shift();
        board[bShark.r][bShark.c] = 0;
        [bShark.r, bShark.c] = [eatR, eatC];
        sec += eatD;
        // board[bShark.r][bShark.c] = 9;
        bShark.exp += 1;

        if (bShark.exp === bShark.size) {
            bShark.size += 1;
            bShark.exp = 0;
        }
    }
    console.log(sec);
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
