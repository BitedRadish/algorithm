function solution(input) {
    // 접시의 수 : n , 초밥의 가짓수 : d , 연속해서 먹는 접시의 수 : k , 쿠폰 번호 : c
    const [n, d, k, c] = input[0];

    const arr = input.slice(1).map((el) => +el);
    const belt = arr.concat(arr.slice(0, k - 1));

    const check = Array(d + 1).fill(0);
    check[c] = 1;
    let kind = 1;

    for (let i = 0; i < k; i++) {
        if (!check[arr[i]]) {
            check[arr[i]] = 1;
            kind++;
        } else {
            check[arr[i]]++;
        }
    }

    let max = kind;

    for (let i = k; i < belt.length; i++) {
        // 윈도우가 밀릴 때 , 이전 요소의 값 제거
        --check[belt[i - k]];
        if (check[belt[i - k]] === 0) --kind;

        ++check[belt[i]];
        if (check[belt[i]] === 1 && check[belt[i]] !== c) ++kind;

        max = Math.max(max, kind);
    }

    console.log(max);
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
// 쿠폰으로 주어진 초밥 번호가 벨트에 있을 때 , 없을 때
// 벨트에 없으면 , 연속으로 먹을 수 있는 경우의 수 +1
// 벨트에 있으면 , 연속으로 먹을 수 있는 4가지 경우가 되는지
// idx 0과 n-1은 연속됨
