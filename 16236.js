// 21:45
// 가장 처음에 아기 상어의 크기는 2
// 아기 상어는 1초에 상하좌우로 인전합 한 칸씩 이동

// 자신의 크기보다 큰 물고기가 있는 칸 지나갈 수 없음
// 작은 물고기만 먹을 수 있다. 크기가 같은 것도 X
// 자신의 크기와 같은 수의 물고기를 먹을 때마다 크기가 1 증가
// 크기가 2이면 물고기를 2마리 먹으면 크기가 3

// 아기 상어의 위치 9

function solution(input) {
    const n = +input[0];
    const map = input.slice(1);

    let init;
    // map에서 아기 상어의 위치를 구해야 함.
    // 현재 크기에 대한 값 필요

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            if (map[row][col] === 9) {
                init = [row, col];
                break;
            }
        }
    }

    // map 자체를 즉시 수정

    let size = 2;
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
