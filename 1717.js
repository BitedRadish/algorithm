function solution(input) {
    // n은 집합의 개수, m은 연산의 개수
    const [n, m] = input[0];
    const oper = input.slice(1);

    const uf = Array.from({ length: n + 1 }, (_, i) => i);

    let ans = [];
    for (let i = 0; i < m; i++) {
        const [o, a, b] = oper[i];
        // 0이면 합치기, 1이면 같은 집합인지 확인
        if (o === 1) {
            ans.push(find(uf, a, b) ? "YES" : "NO");
        } else {
            union(uf, a, b);
        }
    }
    console.log(ans.join("\n"));
}

function getParent(uf, x) {
    if (x === uf[x]) return x;
    // 경로 압축
    return (uf[x] = getParent(uf, uf[x]));
}

function union(uf, a, b) {
    a = getParent(uf, a);
    b = getParent(uf, b);
    a < b ? (uf[b] = a) : (uf[a] = b);
}

function find(uf, a, b) {
    a = getParent(uf, a);
    b = getParent(uf, b);
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
