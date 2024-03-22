function solution(input) {
    const V = +input[0];
    const E = +input[1];

    // 가중치 별로 오름차순 정렬
    const arr = input.slice(2).sort((a, b) => a[2] - b[2]);
    // 인덱스 별 부모 테이블
    const nodeArr = Array(V + 1)
        .fill(0)
        .map((_, idx) => idx);

    // 간선의 갯수
    let cnt = 0;

    // 진행되는 배열의 인덱스
    let i = 0;
    let ans = 0;
    while (cnt < V - 1 && i < arr.length) {
        const [a, b, w] = arr[i];

        const sameParent = findParent(nodeArr, a, b);

        if (!sameParent) {
            unionParent(nodeArr, a, b);
            ans += w;
            cnt++;
        }
        i++;
    }
    console.log(ans);

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
