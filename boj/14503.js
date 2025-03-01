// 청소되지 않은 빈 칸이 없는 경우
// 바라보는 방향을 유지한 채로 한 칸 후진할 수 있다면 한 칸 후진하고 1번으로 (현재 칸 청소)
// 바라보는 방향의 뒤쪽 칸이 벽이라 후진할 수 없다면 작동을 멈춘다.

// 청소되지 않은 빈 칸이 있는 경우
// 반 시계 방향으로 90도 회전 (오른쪽으로 회전)
// 바라보는 방향을 기준으로 앞 쪽 칸이 청소되지 않은 빈 칸인 경우 한 칸 전진

function isAllClean() {}
function isNotAllClean() {}
/**
 * @return {number} cnt : 청소하는 영역의 개수
 * @param {} input
 */
function solution(input) {
    const [N, M] = input[0];
    // 로봇 청소기가 있는 칸의 좌표 , 로봇 청소기가 바라보는 방향
    // d : 0 : 북쪽 , 1 : 동쪽 , 2 : 남쪽 , 3 : 서쪽
    let [r, c, d] = input[1];

    // 동서남북 체크
    const drc = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
    ];

    const direction = {
        0: [-1, 0],
        1: [0, 1],
        2: [1, 0],
        3: [0, -1],
    };
    // 싹 다 마이너스 붙이면 될 것 같기도
    // 0인 경우가 청소되지 않은 빈 칸 , 1인 경우 벽이 있는 경우
    const map = input.slice(2);
    const rotate = [3, 0, 1, 2];

    let cnt = 0;
    while (true) {
        if (map[r][c] === 0) {
            map[r][c] = -1;
            cnt++;
        }
        let isNeededToClean = false;

        for (let i = 0; i < drc.length; i++) {
            if (map[r + drc[i][0]][c + drc[i][1]] === 0) {
                isNeededToClean = true;
                break;
            }
        }
        if (!isNeededToClean) {
            const rear = direction[d].map((el) => el * -1);
            if (map[r + rear[0]][c + rear[1]] === 1) return console.log(cnt);

            [r, c] = [r + rear[0], c + rear[1]];
        } else {
            d = rotate[d];
            if (map[r + direction[d][0]][c + direction[d][1]] === 0) {
                [r, c] = [r + direction[d][0], c + direction[d][1]];
            }
        }
    }
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
