function solution(input) {
    const n = +input.shift();

    const cur = input[0].split("").map(Number);
    const target = input[1].split("").map(Number);

    let cnt = 0;
    if (target[0]) {
    }

    // 0번 인덱스 누르면 0,1번
    // 1번부터 n-2번까지는 i-1,i,i+1
    // n-1번은 n-2번 n번
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
