// 이전에 왔던 칸을 돌아갈 수는 없음 , 따라서 board 만들 필요 X
function solution(input) {
    // 세로 길이 , 가로 길이
    const [n, m] = input;

    if (n == 1) {
        // 조건 1,2,3,4 불가능
        console.log(1);
    } else if (n == 2) {
        // 조건 1,4번이 불가능함 .
        console.log(Math.min(4, Math.floor((m + 1) / 2)));
    } else {
        if (m < 7) {
            // 조건 1 또는 조건 4만 가능
            console.log(Math.min(4, m));
        } else {
            console.log(m - 2);
        }
    }
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    solution(line.split(" ").map((el) => parseInt(el)));
    process.exit();
});
