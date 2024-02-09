function solution(input) {
    const [n, m] = input;
    const visited = Array(100001).fill(0);

    const bfs = () => {
        const queue = [];
        let depth = 0;

        queue.push(n);
        visited[n] = 1;

        while (queue.length) {
            const len = queue.length;
            for (let i = 0; i < len; i++) {
                // for(let i=0;i<queue.length;i++) 하면 동작하지 않는 이유는
                // queue.shift를 하는 동안 원본 배열의 길이가 변경되기 때문
                const node = queue.shift();
                if (node === m) return depth;

                for (let dx of [node - 1, node + 1, node * 2]) {
                    if (dx >= 0 && dx <= 100000 && visited[dx] === 0) {
                        queue.push(dx);
                        visited[dx] = 1;
                    }
                }
            }
            depth++;
        }
    };

    const result = bfs();
    console.log(result);
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    line = line.split(" ").map((el) => parseInt(el));
    solution(line);
    process.exit();
});
