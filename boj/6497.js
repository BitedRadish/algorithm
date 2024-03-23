function solution(input) {
    let start = 0;
    while (true) {
        const [V, E] = input[start];

        const arr = input
            .slice(start + 1, start + E + 1)
            .sort((a, b) => a[2] - b[2]);
        const total = arr.reduce((acc, el) => acc + el[2], 0);
        const nodeArr = Array(V)
            .fill(0)
            .map((_, idx) => idx);

        let ans = 0;
        let cnt = 0;
        let i = 0;

        while (cnt < V - 1 && i < E) {
            const [a, b, w] = arr[i];
            const sameParent = findParent(nodeArr, a, b);

            if (!sameParent) {
                unionParent(nodeArr, a, b);
                ans += w;
                cnt++;
            }
            i++;
        }

        console.log(total - ans);
        start += E + 1;
        const [f, h] = input[start];
        if (f === 0 && h === 0) {
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
    input.push(line.split(" ").map(Number));
}).on("close", () => {
    solution(input);
});
