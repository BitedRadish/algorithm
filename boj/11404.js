function solution(input) {
    // x까지 오는 데에 가장 오래 걸리는 애는 ?
    const n = +input[0];
    const m = +input[1];
    const busArr = input.slice(2, m + 2);

    const matrix = Array.from({ length: n + 1 }, () =>
        new Array(n + 1).fill(Infinity)
    );

    busArr.forEach(
        (bus) =>
            (matrix[bus[0]][bus[1]] = Math.min(bus[2], matrix[bus[0]][bus[1]]))
    );

    floydWarshall(matrix, n);
    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            if (matrix[i][j] === Infinity) matrix[i][j] = 0;
        }
    }
    matrix.slice(1).map((c) => console.log(c.slice(1).join(" ")));
}
const floydWarshall = (graph, n) => {
    // k는 거쳐가는 노드
    for (let k = 1; k < n + 1; k++) {
        // i는 출발 노드
        for (let i = 1; i < n + 1; i++) {
            // j는 도착 노드
            for (let j = 1; j < n + 1; j++) {
                if (graph[i][k] + graph[k][j] < graph[i][j] && i !== j) {
                    graph[i][j] = graph[i][k] + graph[k][j];
                }
            }
        }
    }
};

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
