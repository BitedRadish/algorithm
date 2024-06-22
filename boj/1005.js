function solution(input) {
    const tc = +input[0];
    let t = 0;
    let i = 1;

    while (t < tc) {
        const [n, k] = input[i];
        const seconds = [-1, ...input[i + 1]];
        const node = input.slice(i + 2, i + 2 + k);
        const w = +input[i + 2 + k];

        const graph = Array.from({ length: n + 1 }, () => []);
        const inDegree = Array(n + 1).fill(0);
        const dp = [...seconds];
        for (const [a, b] of node) {
            graph[a].push(b);
            inDegree[b]++;
        }

        const queue = [];

        for (let i = 1; i <= n; i++) {
            if (inDegree[i] === 0) queue.push(i);
        }
        while (queue.length) {
            const cur = queue.shift();
            for (let i = 0; i < graph[cur].length; i++) {
                const next = graph[cur][i];
                if (dp[next] < dp[cur] + seconds[next]) {
                    dp[next] = dp[cur] + seconds[next];
                }
                --inDegree[next];
                if (inDegree[next] === 0) queue.push(next);
            }
        }
        console.log(dp[w]);
        i += k + 3;
        t++;
    }
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
