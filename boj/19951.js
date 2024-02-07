//https://anz1217.tistory.com/136
//풀이 보고 벽 ㅈㄴ 느낌
// 세그먼트 트리

function solution(input) {
    const [n, m] = input[0];
    let arr = input[1];
    // 성능 문제 x
    const need = Array(n + 1).fill(0);

    for (let i = 2; i < m + 2; i++) {
        const [a, b, k] = input[i];
        need[a - 1] += k;
        need[b] += -k;
    }
    for (let i = 1; i < need.length; i++) {
        need[i] += need[i - 1];
    }
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
