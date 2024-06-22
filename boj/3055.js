function solution(input) {
    const [r, c] = input[0].map(Number);
    const map = input.slice(1).map((el) => el[0].split(""));

    const drc = [
        [-1, 0],
        [0, -1],
        [1, 0],
        [0, 1],
    ];

    const waterArr = [];
    const queue = [];
    const visited = Array.from({ length: r }, () => Array(c).fill(0));

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (map[i][j] === "*") {
                waterArr.push([i, j]);
            }
            if (map[i][j] === "S") {
                queue.push([i, j]);
            }
        }
    }
    const BFS = () => {
        let head = 0;
        let min = 0;
        while (head < queue.length) {
            console.log(waterArr);
            min = movingWater(map, drc, waterArr, min, r, c);
            const len = queue.length;
            for (let i = head; i < len; i++) {
                const [curR, curC] = queue[head++];
                visited[curR][curC] = 1;
                for (let j = 0; j < 4; j++) {
                    const [nextR, nextC] = [curR + drc[j][0], curC + drc[j][1]];
                    if (
                        nextR >= 0 &&
                        nextR <= r - 1 &&
                        nextC >= 0 &&
                        nextC <= c - 1 &&
                        !visited[nextR][nextC]
                    ) {
                        if (map[nextR][nextC] === ".") {
                            queue.push([nextR, nextC]);
                        }
                        if (map[nextR][nextC] === "D") {
                            return ++min;
                        }
                    }
                }
            }
        }
    };
    const ans = BFS();
    console.log(ans ? ans : "KAKTUS");
}
function movingWater(map, drc, waterArr, min, r, c) {
    const newWater = [];
    for (let i = 0; i < waterArr.length; i++) {
        const [curR, curC] = waterArr.shift();
        for (let k = 0; k < 4; k++) {
            const [nextR, nextC] = [curR + drc[k][0], curC + drc[k][1]];
            if (nextR >= 0 && nextR <= r - 1 && nextC >= 0 && nextC <= c - 1) {
                if (map[nextR][nextC] === ".") {
                    map[nextR][nextC] = "*";
                    waterArr.push([nextR, nextC]);
                }
            }
        }
    }
    waterArr.push(...newWater);
    return ++min;
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
    input.push(line.split(" "));
}).on("close", () => {
    solution(input);
    process.exit();
});
