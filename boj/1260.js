function solution(input) {
    const [n, m, v] = input[0];
    const tree = {};

    // tree 구성
    for (let i = 1; i < n + 1; i++) {
        tree[i] = [];
    }
    for (let i = 0; i < input.length - 1; i++) {
        const [node1, node2] = input[1 + i];
        tree[node1].push(node2);
        tree[node2].push(node1);
    }
    for (let key in tree) {
        tree[key].sort((a, b) => a - b);
    }

    const dfs = () => {
        let needVisit = [];
        const visited = [];

        visited.push(v);
        needVisit.push(...tree[v]);

        while (needVisit.length !== 0) {
            const node = needVisit.shift();
            if (!visited.includes(node)) {
                visited.push(node);
                needVisit = [...tree[node], ...needVisit];
            }
        }
        return visited;
    };

    const bfs = () => {
        let needVisit = [];
        const visited = [];

        visited.push(v);
        needVisit.push(...tree[v]);

        while (needVisit.length !== 0) {
            const node = needVisit.shift();
            if (!visited.includes(node)) {
                visited.push(node);
                needVisit = [...needVisit, ...tree[node]];
            }
        }
        return visited;
    };
    const dfsArr = dfs();
    const bfsArr = bfs();
    console.log(dfsArr.join(" "));
    console.log(bfsArr.join(" "));
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
