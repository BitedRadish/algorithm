function solution(input) {
    const n = +input[0];
    const arr = input.slice(1);

    const parentArr = Array.from({ length: n }, (_, idx) => idx);

    const distanceArr = getDistanceArr(arr, n);

    let cnt = 0;
    let i = 0;
    let ans = 0;

    while (cnt < n - 1) {
        const [w, a, b] = distanceArr[i];
        const sameParent = findParent(parentArr, a, b);

        if (!sameParent) {
            unionParent(parentArr, a, b);
            cnt++;
            ans += w;
        }
        i++;
    }

    console.log(ans);
}

function getDistanceArr(arr, n) {
    const pArr = [];

    for (let i = 0; i < 3; i++) {
        const temp = [];
        for (let j = 0; j < n; j++) {
            temp.push([arr[j][i], j]);
        }
        pArr.push(temp.sort((a, b) => a[0] - b[0]));
    }
    const edges = [];

    for (let i = 0; i < pArr.length; i++) {
        for (let j = 0; j < n - 1; j++) {
            const [w1, a] = pArr[i][j];
            const [w2, b] = pArr[i][j + 1];
            edges.push([Math.abs(w1 - w2), a, b]);
        }
    }
    return edges.sort((a, b) => a[0] - b[0]);
}

function getParent(arr, el) {
    if (arr[el] === el) return el;
    return getParent(arr, arr[el]);
}

function unionParent(arr, a, b) {
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
