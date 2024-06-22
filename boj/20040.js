function solution(input) {
    const [n, m] = input[0];
    const arr = input.slice(1);

    const parentArr = Array.from({ length: n }, (_, idx) => idx);

    let i = 0;
    let ans = 0;
    while (i < m) {
        const [a, b] = arr[i];
        const sameParent = findParent(parentArr, a, b);

        if (sameParent) {
            console.log(++ans);
            process.exit();
        } else {
            unionParent(parentArr, a, b);
        }
        ans++;
        i++;
    }
    console.log(0);
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
