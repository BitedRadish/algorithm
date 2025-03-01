function solution(input) {
    // N칸 , 조교 M명
    const [n, m] = input[0];
    const h = input[1].slice();
    const todo = input.slice(2);

    const temp = Array.from({ length: n + 1 }).fill(0);

    for (let i = 0; i < todo.length; i++) {
        const [a, b, k] = todo[i];
        temp[a - 1] += k;
        temp[b] -= k;
    }

    for (let i = 1; i < temp.length - 1; i++) {
        temp[i] += temp[i - 1];
    }

    for (let i = 0; i < n; i++) {
        h[i] += temp[i];
    }

    console.log(h.join(" "));
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
