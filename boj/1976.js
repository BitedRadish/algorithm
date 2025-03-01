function solution(input) {
    const n = Number(input[0]);
    const m = Number(input[1]);

    const connected = input
        .slice(2, 2 + n)
        .map((e) => e.split(" ").map(Number));

    const plan = input
        .slice(n + 2)[0]
        .split(" ")
        .map(Number);

    // 연결 표시 배열
    const arr = Array.from({ length: n }, (_, idx) => idx);

    for (let from = 0; from < connected.length; from++) {
        for (let to = 0; to < connected[from].length; to++) {
            if (connected[from][to]) {
                union(from, to, arr);
            }
        }
    }

    for (let i = 0; i < plan.length - 1; i++) {
        const p1 = plan[i];
        const p2 = plan[i + 1];
        if (arr[p1 - 1] !== arr[p2 - 1]) return console.log("NO");
    }
    console.log("YES");
    // plan에 대한 가능성 여부를 어떻게 판단하면 좋을까
}

function findParent(x, arr) {
    if (arr[x] === x) return x;
    return (arr[x] = findParent(arr[x], arr));
}

function union(x, y, arr) {
    x = findParent(x, arr);
    y = findParent(y, arr);

    return x < y ? (arr[y] = x) : (arr[x] = y);
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
