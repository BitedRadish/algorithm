function solution(input) {
    const n = +input[0];
    const fruit = input[1].slice();

    if (new Set(fruit).size <= 2) return console.log(fruit.length);

    let head = 0;
    let tail = 1;

    let sort = 1;
    let max = -Infinity;

    const arr = [fruit[head]];

    while (head < n) {
        while (sort < 2 && tail < n) {
            if (sort > 2) break;
            const now = fruit[tail];
            // 새로운 값이라면
            // 종류 증가
            if (!arr.includes(now)) {
                sort++;
            }
            // 새로운 값이 아니라면
            arr.push(now);
            tail++;
        }
        // 증가될 때까지 증가돼서 조건문이 멈췄을 때
        console.log(arr);
        max = Math.max(max, arr.length);
        head++;
        arr.shift();
        if (new Set(arr).size !== sort) --sort;
    }
    console.log(max);
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
