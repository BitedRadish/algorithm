// 공기 청정기는 두 행을 차지
// ** 미세먼지
// (r,c)에 있는 미세 먼지는 인접한 네 방향으로 확산
// 인접한 방향에 공청기 있거나 칸이 없으면 그 방향으로는 확산 x (??)
// 확산되는 양은 Math.floor(Ar,c/5)
// r,c는 Ar,c-Math.floor(Ar,c/5)*(확산된 방향의 개수)

// ** 공청기
// 위쪽 공청기 반시계 방향
// 아래쪽 공청기 시계방향
// 바람이 불면 미세 먼지가 바람의 방향대로 모두 한 칸씩 이동
// 미세먼지는 칸이 중첩 가능

function rotateClockwise(pos, newMap, r, c) {
    const [row, col] = pos;
    for (let i = c - 1; i > 0; i--) {
        newMap[row][i] = newMap[row][i - 1];
    }
}
function rotateAntiClockwise(pos, newMap) {}

function spread(p, map, newMap, r, c) {
    const drc = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
    ];

    const nextArr = [];
    let cnt = 0;
    const [curR, curC] = p;
    for (let d = 0; d < 4; d++) {
        const [nextR, nextC] = [curR + drc[d][0], curC + drc[d][1]];
        if (nextR >= 0 && nextR < r && nextC >= 0 && nextC < c) {
            if (map[nextR][nextC] !== -1) {
                cnt++;
                nextArr.push([nextR, nextC]);
            }
        }
    }
    const amount = Math.floor(map[curR][curC] / 5);

    newMap[curR][curC] -= amount * cnt;

    nextArr.forEach((n) => {
        const [nr, nc] = n;
        newMap[nr][nc] += amount;
    });
}

function solution(input) {
    const [r, c, t] = input[0];
    let map = input.slice(1);

    const dustPosition = [];
    const airCleaner = [];

    for (let row = 0; row < r; row++) {
        for (let col = 0; col < c; col++) {
            if (map[row][col] > 0) dustPosition.push([row, col]);
            if (map[row][col] === -1) airCleaner.push([row, 0]);
        }
    }
    airCleaner.sort((a, b) => a[0] - b[0]);

    let idx = 0;

    while (idx < t) {
        const newMap = map.map((d) => [...d]);

        dustPosition.forEach((p) => {
            spread(p, map, newMap, r, c);
        });

        rotateAntiClockwise(airCleaner[0], newMap, r, c);
        rotateClockwise(airCleaner[1], newMap, r, c);
        map = newMap.map((d) => [...d]);
        idx++;
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
