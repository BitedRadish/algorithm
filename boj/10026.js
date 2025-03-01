function solution(input) {
    const n = +input[0];

    const drc = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];
    const map = input.slice(1);

    const canVisited = Array.from({ length: n }, () => Array(n).fill(false));
    const cantVisited = Array.from({ length: n }, () => Array(n).fill(false));

    const canBfs = (info, color) => {
        const queue = [info];
        let head = 0;

        while (head < queue.length) {
            const [curR, curC] = queue[head++];
            for (let i = 0; i < 4; i++) {
                const [nextR, nextC] = [curR + drc[i][0], curC + drc[i][1]];
                if (nextR >= 0 && nextC >= 0 && nextR < n && nextC < n) {
                    if (
                        !canVisited[nextR][nextC] &&
                        map[nextR][nextC] === color
                    ) {
                        canVisited[nextR][nextC] = true;
                        queue.push([nextR, nextC]);
                    }
                }
            }
        }
    };

    const cantBfs = (info, color) => {
        const queue = [info];
        let head = 0;

        while (head < queue.length) {
            const [curR, curC] = queue[head++];
            for (let i = 0; i < 4; i++) {
                const [nextR, nextC] = [curR + drc[i][0], curC + drc[i][1]];
                if (nextR >= 0 && nextC >= 0 && nextR < n && nextC < n) {
                    if (!cantVisited[nextR][nextC]) {
                        if (color === "G" || color === "R") {
                            if (
                                map[nextR][nextC] === "G" ||
                                map[nextR][nextC] === "R"
                            ) {
                                cantVisited[nextR][nextC] = true;
                                queue.push([nextR, nextC]);
                            }
                        } else if (color === "B") {
                            if (map[nextR][nextC] === color) {
                                cantVisited[nextR][nextC] = true;
                                queue.push([nextR, nextC]);
                            }
                        }
                    }
                }
            }
        }
    };

    let can = 0;
    let cant = 0;

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (!canVisited[r][c]) {
                canVisited[r][c] = true;
                canBfs([r, c], map[r][c]);
                can++;
            }
        }
    }

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (!cantVisited[r][c]) {
                cantVisited[r][c] = true;
                cantBfs([r, c], map[r][c]);
                cant++;
            }
        }
    }

    console.log([can, cant].join(" "));
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    solution(input);
    process.exit();
});
