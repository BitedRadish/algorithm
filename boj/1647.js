function solution(input) {
    const [V, E] = input[0];
    const arr = input.slice(1).sort((a, b) => a[2] - b[2]);
    const nodeArr = Array(V + 1)
        .fill(0)
        .map((_, idx) => idx);

    let cnt = 0;
    let i = 0;
    const ans = [];
    while (cnt < V - 1 && i < arr.length) {
        const [a, b, w] = arr[i];
        const sameParent = findParent(nodeArr, a, b);

        if (!sameParent) {
            unionParent(nodeArr, a, b);
            ans.push(w);
            cnt++;
        }

        i++;
    }

    console.log(ans.reduce((acc, val) => acc + val) - Math.max(...ans));

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
