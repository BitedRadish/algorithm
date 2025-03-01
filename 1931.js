// 20:00
// 회의의 시작 시간과 끝나는 시간이 같을 수도 있다.-> 시작하자마자 끝나는 것
// 얼핏 보면 유형이 DP와 같음

// 길이가 짧은 애들부터 갈기면 ?

function solution(input) {
    const n = +input.shift();
    const conf = input
        .slice()
        .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

    let ans = 0;
    let end = 0;

    conf.forEach((c) => {
        if (c[0] >= end) {
            ++ans;
            end = c[1];
        }
    });
    console.log(ans);
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
