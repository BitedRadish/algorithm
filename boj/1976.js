function solution(input) {
    const n = +input[0];
    const m = +input[1];

    const arr = input.slice(2, 2 + n);

    const linkArr = [];
    // 연결된 간선 저장
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[i][j] === 1) {
                linkArr.push([i + 1, j + 1]);
            }
        }
    }
    const parentArr = Array.from({ length: n + 1 }, (_, idx) => idx);
    const targets = input[2 + n];

    // 부모 합치기
    for (let i = 0; i < linkArr.length; i++) {
        const [a, b] = linkArr[i];
        unionFind(parentArr, a, b);
    }

    for (let i = 0; i < m - 1; i++) {
        if (!findParent(parentArr, targets[i], targets[i + 1])) {
            console.log("NO");
            return;
        }
    }
    console.log("YES");
}

function getParent(arr, el) {
    if (arr[el] === el) return el;
    return getParent(arr, arr[el]);
}
function unionFind(arr, a, b) {
    a = getParent(arr, a);
    b = getParent(arr, b);

    a < b ? (arr[b] = a) : (arr[a] = b);
}

function findParent(arr, a, b) {
    a = getParent(arr, a);
    b = getParent(arr, b);
    return a === b;
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
