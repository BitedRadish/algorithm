function solution(input) {
    const [n, m] = input.shift();
    const graph = Array.from({ length: n + 1 }, () => []);

    input.forEach((i) => {
        const [from, to] = i;
        graph[from].push(to);
        graph[to].push(from);
    });

    const bfs = (start) => {
        const visited = Array(n + 1).fill(false);
        const queue = [[start, 0]];
        const cntArr = Array(n + 1).fill(0);
        visited[start] = true;

        let head = 0;

        while (head < queue.length) {
            const [cur, cnt] = queue[head++];
            const next = graph[cur];
            for (let n of next) {
                if (!visited[n] && n !== start) {
                    visited[n] = true;
                    queue.push([n, cnt + 1]);
                    cntArr[n] = cnt + 1;
                }
            }
        }
        return cntArr.reduce((acc, val) => acc + val, 0);
    };

    const ans = [];

    // 1과 나머지 친구들의 거리를 구해야 하는데,
    // 어차피 bfs돌리면 1과의 거리가 얼만지 다 나오지 않나 ?
    for (let i = 1; i <= n; i++) {
        const sum = bfs(i);
        ans.push(sum);
    }

    console.log(ans.indexOf(Math.min(...ans)) + 1);
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

// function solution(input) {
//     const [n, m] = input[0];
//     const graph = input.slice(1).reduce((acc, val) => {
//         const [from, to] = val;
//         if (!acc[from]) {
//             acc[from] = [to];
//         } else {
//             acc[from].push(to);
//         }

//         if (!acc[to]) {
//             acc[to] = [from];
//         } else {
//             acc[to].push(from);
//         }

//         return acc;
//     }, {});

//     const ans = [];

//     for (let node in graph) {
//         ans.push(bfs(n, Number(node), graph[node], graph));
//     }

//     let min = Math.min(...ans);
//     const idx = ans.indexOf(min);

//     console.log(idx + 1);
// }

// const bfs = (n, me, need, graph) => {
//     const arr = Array(n + 1).fill(0);
//     const queue = [...need];

//     let head = 0;

//     let cnt = 1;
//     while (head < queue.length) {
//         const len = queue.length;
//         for (let i = 0; i < len; i++) {
//             const cur = queue[head++];
//             if (arr[cur] === 0 && cur !== me) {
//                 arr[cur] = cnt;
//                 queue.push(...graph[cur]);
//             }
//         }
//         cnt++;
//     }
//     return arr.reduce((acc, val) => acc + val, 0);
// };
// const rl = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// const input = [];

// rl.on("line", (line) => {
//     input.push(line.split(" ").map(Number));
// }).on("close", () => {
//     solution(input);
//     process.exit();
// });
