function solution(input) {
    const [V, E] = input[0];

    // 가중치를 오름차순으로 정렬
    const arr = input.slice(1).sort((a, b) => a[2] - b[2]);

    const Varr = Array(V + 1)
        .fill(0)
        .map((_, idx) => idx);
    // 가중치의 합
    let ans = 0;

    // 연결된 간선의 갯수
    let cnt = 0;

    // 인덱스
    let i = 0;
    while (cnt !== V - 1 && i < arr.length) {
        const [a, b, w] = arr[i];
        const sameParent = findParent(Varr, a, b);
        if (!sameParent) {
            unionParent(Varr, a, b);
            ans += w;
            cnt++;
        }
        i++;
    }
    console.log(ans);

    // 이후 union find를 이용한 노드 연결 (사이클 형성 X)
    // 사이클을 형성하지 않는 조건은 같은 부모를 가지지 않게

    function getParent(arr, a) {
        if (arr[a] === a) return a;
        return getParent(arr, arr[a]);
    }

    function unionParent(arr, a, b) {
        a = getParent(arr, a);
        b = getParent(arr, b);

        a < b ? (arr[b] = a) : (arr[a] = b);
    }

    function findParent(arr, a, b) {
        a = getParent(arr, a);
        b = getParent(arr, b);
        if (a === b) {
            return true;
        } else {
            return false;
        }
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
