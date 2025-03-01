// 18:11
function solution(input) {
    // 정점의 개수, 간선의 개수, 탐색을 시작할 정점의 번호
    const [n, m, v] = input.shift();
    const graph = {};

    console.log(graph);
    for (let i = 1; i <= n; i++) {
        graph[i] = [];
    }
    for (let i = 0; i < n; i++) {
        const [n, c] = input[i];
        graph[n].push(c);
        graph[c].push(n);
    }
    console.log(graph);

    for (let key in graph) {
        graph[key].sort((a, b) => a - b);
    }

    dfs(v, graph);
    bfs(v, graph);
}

const dfs = (node, graph) => {
    const ans = [node];
    const visited = [node];
    let needVisit = [...graph[node]];

    while (needVisit.length > 0) {
        const node = needVisit.shift();
        if (!visited.includes(node)) {
            visited.push(node);
            ans.push(node);
            needVisit = [...graph[node], ...needVisit];
        }
    }
    console.log(ans.join(" "));
};

const bfs = (node, graph) => {
    const ans = [node];
    const visited = [node];
    let needVisit = [...graph[node]];

    while (needVisit.length > 0) {
        const node = needVisit.shift();
        if (!visited.includes(node)) {
            visited.push(node);
            ans.push(node);
            needVisit.push(...graph[node]);
        }
    }
    console.log(ans.join(" "));
};

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
