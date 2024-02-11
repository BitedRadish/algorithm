function solution(input) {
    const [r, c] = input[0].map((el) => parseInt(el));
    const alpha = [];
    const visited = Array(26).fill(false);
    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, 1, -1];
    let ans = 0;

    for (let i = 1; i < r + 1; i++) {
        alpha.push(input[i][0].split(""));
    }

    function DFS(x, y, cnt) {
        ans = Math.max(ans, cnt);
        for (let i = 0; i < 4; i++) {
            let nx = x + dr[i];
            let ny = y + dc[i];
            if (nx >= 0 && ny >= 0 && nx < r && ny < c) {
                if (visited[alpha[nx][ny].charCodeAt() - 65] === false) {
                    visited[alpha[nx][ny].charCodeAt() - 65] = true;
                    DFS(nx, ny, cnt + 1);
                    visited[alpha[nx][ny].charCodeAt() - 65] = false;
                }
            }
        }
    }
    visited[alpha[0][0].charCodeAt() - 65] = true;
    DFS(0, 0, 1);
    console.log(ans);
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
