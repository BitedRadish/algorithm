function solution(input) {
    const [n, k] = input;
    const visited = Array.from({ length: 1000001 }).fill(0);

    const queue = [];
    visited[n] = 1;
    queue.push([n, 0]);

    while (queue.length) {
        const [cur, time] = queue.shift();
        if (cur === k) return console.log(time);
        for (next of [cur - 1, cur + 1, cur * 2]) {
            if (!visited[next] && next >= 0 && next <= 100000) {
                visited[next] = 1;
                queue.push([next, time + 1]);
            }
        }
    }
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    solution(line.split(" ").map(Number));
    process.exit();
});
