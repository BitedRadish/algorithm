// 1:27
function solution(input) {
    // 접시 갯수, 초밥의 가지수, 연속해서 먹는 접시의 수, 쿠폰 번호
    const [N, d, k, c] = input.shift();
    const dishes = input.slice().concat(input.slice(0, k - 1));

    const check = Array.from({ length: d + 1 }).fill(0);

    check[c] = 1;
    let kind = 1;

    for (let i = 0; i < k; i++) {
        let cur = dishes[i];
        if (!check[cur]) {
            ++kind;
            ++check[cur];
        } else {
            ++check[cur];
        }
    }
    let max = kind;
    for (let i = k; i < dishes.length; i++) {
        --check[dishes[i - k]];
        if (check[dishes[i - k]] === 0) --kind;

        ++check[dishes[i]];
        if (check[dishes[i]] === 1 && dishes[i] !== c) ++kind;

        max = Math.max(kind, max);
    }

    console.log(max);
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
let idx = 0;
rl.on("line", (line) => {
    idx === 0
        ? input.push(line.split(" ").map(Number))
        : input.push(Number(line));
    idx++;
}).on("close", () => {
    solution(input);
    process.exit();
});
