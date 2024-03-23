function solution(input) {
    const n = +input[0];
    const arr = input.slice(1);
    const parentArr = Array(n)
        .fill(0)
        .map((_, idx) => idx);
    const distanceArr = getDistanceArr(arr, n);

    // 간선의 갯수
    let cnt = 0;
    let i = 0;
    let ans = 0;

    while (cnt < n - 1 && distanceArr.length) {
        let [a, b, w] = distanceArr[i];

        const sameParent = findParent(parentArr, a, b);
        if (!sameParent) {
            unionParent(parentArr, a, b);
            ans += w;
            cnt++;
        }
        i++;
    }
    console.log(ans);
}
function getDistanceArr(arr, n) {
    const distanceArr = [];

    for (let i = 0; i < n; i++) {
        const [curX, curY] = arr[i];
        for (let j = i + 1; j < n; j++) {
            const [tempX, tempY] = arr[j];
            const dist = Math.sqrt((tempX - curX) ** 2 + (tempY - curY) ** 2);
            distanceArr.push([i, j, dist]);
        }
    }
    return distanceArr.sort((a, b) => a[2] - b[2]);
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
