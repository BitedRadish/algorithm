function solution(input) {
    const [n, m, r] = input.shift();
    // (0,0) 일때는 x값 증가 (1,0)
    // (N,0) 일때는 y값 증가 -> (N,1)
    // (0,M) 일 때는 y값 감소 -> (0,M-1)
    // (n,M) 일때는 x값 값소 -> (n-1.m)
    let arr = [...input];

    // 양 꼭짓점을 가져다주면 ?
    const rotateArr = (
        initX,
        initY,
        N,
        M,
        change = Array(n)
            .fill(0)
            .map(() => Array(m).fill(0))
    ) => {
        if (N - initX < 0 || M - initY < 0) return;

        // 왼쪽 변
        for (let i = initX; i <= N - 1; i++) {
            change[i + 1][initY] = arr[i][initY];
        }

        // 아랫변
        for (let i = initY; i <= M - 1; i++) {
            change[N][i + 1] = arr[N][i];
        }
        // 오른쪽 변
        for (let i = N; i >= initX + 1; i--) {
            change[i - 1][M] = arr[i][M];
        }

        for (let i = M; i >= initY + 1; i--) {
            change[initX][i - 1] = arr[initX][i];
        }

        // 각 꼭짓점

        rotateArr(initX + 1, initY + 1, N - 1, M - 1, change);

        return change;
    };
    for (let i = 0; i < r; i++) {
        arr = rotateArr(0, 0, n - 1, m - 1);
    }

    console.log(arr.map((el) => el.join(" ")).join("\n"));
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
