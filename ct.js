function solution(input) {
    const [n, m] = input[0];
    const map = input.slice(1, n + 1);

    const arr = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

    map.forEach((row, x) => {
        row.forEach((cell, y) => {
            arr[x][y] = cell;
        });
    });

    for (let x = 1; x <= n; x++) {
        for (let y = 1; y <= n; y++) {
            arr[x + 1][y + 1] += arr[x][y + 1] + arr[x + 1][y] - arr[x][y];
        }
    }

    console.log(arr);

    const ans = [];
    for (let i = n + 1; i < n + m + 1; i++) {
        const [x1, y1, x2, y2] = input[i];
        const sum =
            arr[x2 - 1][y2 - 1] -
            arr[x1 - 2][y2 - 1] -
            arr[x2 - 1][y1 - 2] +
            arr[x1 - 2][y1 - 2];

        console.log(sum);
        ans.push();
    }
    console.log(ans.join("\n"));
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (data) => {
    input.push(data.split(" ").map(Number));
}).on("close", () => {
    solution(input);
    process.exit();
});
