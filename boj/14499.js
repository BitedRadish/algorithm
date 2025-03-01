function solution(input) {
    let [N, M, x, y, cmdCnt] = input[0];
    const map = input.slice(1, N + 1);
    const cmdArr = input.slice(N + 1)[0];

    const cmd = {
        1: [0, 1],
        2: [0, -1],
        3: [-1, 0],
        4: [1, 0],
    };
    // 동 , 서 , 북 , 남
    const dice = {
        1: {
            value: 0,
            next: {
                1: 4,
                2: 3,
                3: 5,
                4: 2,
            },
        },
        2: {
            value: 0,
            next: {
                1: 4,
                2: 3,
                3: 1,
                4: 6,
            },
        },
        3: {
            value: 0,
            next: {
                1: 1,
                2: 4,
                3: 5,
                4: 2,
            },
        },
        4: {
            value: 0,
            next: {
                1: 3,
                2: 1,
                3: 5,
                4: 2,
            },
        },
        5: {
            value: 0,
            next: {
                1: 3,
                2: 4,
                3: 6,
                4: 1,
            },
        },
        6: {
            value: 0,
            next: {
                1: 4,
                2: 3,
                3: 2,
                4: 5,
            },
        },
    };

    let bottom = 6;
    const contrast = ["X", 6, 5, 4, 3, 2, 1];

    function rollTheDice(command) {
        bottom = dice[bottom].next[command];
    }

    function canBeMoved(nextX, nextY) {
        return nextX >= 0 && nextX < N && nextY >= 0 && nextY < M;
    }

    for (let i = 0; i < cmdCnt; i++) {
        const command = cmdArr[i];

        const [nextX, nextY] = [x + cmd[command][0], y + cmd[command][1]];

        if (canBeMoved(nextX, nextY)) {
            [x, y] = [nextX, nextY];
            rollTheDice(command);
            console.log(`x,y는 ${x} ${y}`);
            if (map[x][y] === 0) {
                map[x][y] = dice[bottom].value;
            } else {
                dice[bottom].value = map[x][y];
            }
            const top = contrast[bottom];
            console.log(dice[top].value);
        } else {
            continue;
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
