// 끝나는 지점부터 시작하면 됨
function solution(input) {
    const n = input[0][0];

    let meetings = input
        .slice(1)
        .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));
    let [start, finish] = meetings[0];
    let ans = 1;

    for (let i = 1; i < meetings.length; i++) {
        let [nextStart, nextFinish] = meetings[i];
        if (nextStart >= finish) {
            [start, finish] = [nextStart, nextFinish];
            ans++;
        }
    }
    console.log(ans);
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
