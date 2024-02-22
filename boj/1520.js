// dfs

function solution(input) {
    const [r, c] = input[0];
    const map = input.slice(1);

    // 상 좌 하 우
    const drc = [
        [-1, 0],
        [0, -1],
        [1, 0],
        [0, 1],
    ];
    // 방문할 수 있는 경우의 수가 0일 수도 있기 때문에
    const dp = Array(r)
        .fill(0)
        .map((_) => Array(c).fill(-1));

    const dfs = (row, col) => {
        // 목표 위치에 도착한 했다면 경로를 1 추가한다는 듯
        if (row === r - 1 && col === c - 1) {
            return 1;
        }
        // 방문 했다는 뜻
        if (dp[row][col] !== -1) {
            return dp[row][col];
        }
        let cnt = 0;

        for (let d of drc) {
            const [nr, nc] = [row + d[0], col + d[1]];

            if (nr >= 0 && nr <= r - 1 && nc >= 0 && nc <= c - 1) {
                if (map[nr][nc] < map[row][col]) {
                    cnt += dfs(nr, nc);
                }
            }
        }

        dp[row][col] = cnt;
        return cnt;
    };
    console.log(dfs(0, 0));
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
