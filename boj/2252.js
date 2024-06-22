function solution(input) {
    const [n, m] = input[0];
    const graph = input.slice(1);

    const result = [];

    // 연결된 노드
    const link = Array.from({ length: n + 1 }, () => []);

    // 노드의 진입 차수
    const inDegree = Array(n + 1).fill(0);

    for (const v of graph) {
        const [a, b] = v;
        link[a].push(b);
        inDegree[b]++;
    }
    console.log(link);
    console.log(inDegree);
    const queue = [];

    for (let i = 1; i <= n; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }
    console.log(queue);

    while (queue.length) {
        const cur = queue.shift();
        result.push(cur);

        for (const adj of link[cur]) {
            --inDegree[adj];
            if (inDegree[adj] === 0) {
                queue.push(adj);
            }
        }
    }
    console.log(result.join(" "));
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
