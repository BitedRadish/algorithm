function solution(input) {
    const n = parseInt(input[0][0]);

    // 지도  초기화
    const map = [];
    for (let i = 1; i < n + 1; i++) {
        const f = Array.from(input[i][0]).map((el) => parseInt(el));
        map.push(f);
    }
    // 방문 배열
    const visited = Array(n)
        .fill(0)
        .map(() => Array(n).fill(0));

    // 오른쪽 , 아래 , 위 , 왼쪽
    const dr = [0, 1, -1, 0];
    const dc = [1, 0, 0, -1];

    let villages = 0;
    const cntArr = [];
    let cntI;
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (map[r][c] === 1 && visited[r][c] === 0) {
                visited[r][c] = 1;
                const cnt = dfs([r, c], (cntI = 1));
                cntArr.push(cnt);
                villages++;
            }
        }
    }

    function dfs([r, c], cntI) {
        const stack = [[r, c]];
        while (stack.length) {
            const len = stack.length;

            for (let j = 0; j < len; j++) {
                const v = stack.pop();
                const [dfsR, dfsC] = v;

                for (let i = 0; i < dr.length; i++) {
                    const [nextR, nextC] = [dfsR + dr[i], dfsC + dc[i]];
                    if (
                        nextR >= 0 &&
                        nextR <= n - 1 &&
                        nextC >= 0 &&
                        nextC <= n - 1 &&
                        visited[nextR][nextC] === 0 &&
                        map[nextR][nextC] === 1
                    ) {
                        visited[nextR][nextC] = 1;
                        stack.push([nextR, nextC]);
                        cntI++;
                    }
                }
            }
        }
        return cntI;
    }
    console.log(villages);
    console.log(cntArr.sort((a, b) => a - b).join("\n"));
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
