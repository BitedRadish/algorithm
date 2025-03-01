// 19:29
function solution(input) {
    // 최대한 연료를 아껴 (필요한 연료의 최소값)
    // 달에서 시작하는 건 어떨까 (똑같음-> 알고하니까 지금 이런 거지)
    const [n, m] = input.shift();
    // bfs라는 생각이 들긴 하는데
    const drc = [
        [1, -1],
        [1, 0],
        [1, 1],
    ];
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
