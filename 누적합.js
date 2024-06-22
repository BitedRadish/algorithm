// 19951
function solution(input) {
    const [n, m] = input[0];
    let arr = input[1];

    // 누적합 배열을 만들기 위한 준비를 해줍니다.
    const need = Array(n + 1).fill(0);

    for (let i = 2; i < m + 2; i++) {
        const [a, b, k] = input[i];
        need[a - 1] += k;
        need[b] += -k;
    }

    // 누적합 배열을 만들어줍니다.
    for (let i = 1; i < need.length; i++) {
        need[i] += need[i - 1];
    }

    // 조교들의 지시를 기존 연병장 배열에 더해줍니다.
    arr = arr.map((el, idx) => {
        return el + need[idx];
    });
    console.log(arr.join(" "));
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
