function solution(input) {
    const [n, m] = input[0].split(" ").map(Number);
    const map = input.slice(1).map((el) => el.split("").map(Number));

    const visited = Array.from({ length: n }, () =>
        Array.from({ length: m }).fill(0)
    );

    const drc = [
        [-1, 0],
        [0, -1],
        [1, 0],
        [0, 1],
    ];

    const queue = [[0, 0]];

    let ans = 1;

    while (queue.length !== 0) {
        const len = queue.length;
        for (let i = 0; i < len; i++) {
            const [r, c] = queue.shift();
            if (r === n - 1 && c === m - 1) return console.log(ans);
            for (d of drc) {
                const [tr, tc] = d;
                const [nr, nc] = [r + tr, c + tc];
                if (
                    nr >= 0 &&
                    nr < n &&
                    nc >= 0 &&
                    nc < m &&
                    !visited[nr][nc]
                ) {
                    if (map[nr][nc] === 1) {
                        visited[nr][nc] = 1;
                        queue.push([nr, nc]);
                    }
                }
            }
        }
        ans++;
    }
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    solution(input);
    process.exit();
});
