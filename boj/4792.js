function solution(input) {
    let start = 0;
    while (true) {
        // 정점의 갯수 n , 간선의 갯수 m , 일치 여부 k
        const [n, m, k] = input[start].map(Number);

        const arr = input.slice(start + 1, start + m + 1).map(el);
        const parentArr = Array.from({ length: n + 1 }, (_, idx) => idx);
        let cnt = 0;
        let i = 0;

        const tree = {};

        while (cnt < n - 1 && i < m) {
            const [color, a, b] = arr[i];
            const sameParent = findParent(parentArr, parseInt(a), parseInt(b));

            if (color === "B" && !sameParent) {
                unionParent(a, b);
                cnt++;
            }
            i++;
        }
        cnt === k ? console.log(1) : console.log(0);

        start += m + 1;
        const [z, x, c] = input[start];
        if (z === "0" && x === "0" && c === "0") {
            process.exit();
        }
    }
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
    input.push(line.split(" "));
}).on("close", () => {
    solution(input);
});
