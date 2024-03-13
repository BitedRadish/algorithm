function solution(input) {
    const n = +input[0];
    const cur = input[1].split("").map(Number);
    const target = input[2].split("").map(Number);

    // 첫 번째 전구를 제외하고는 이전 전구의 내용을 바꾼다.
    // 첫 번째 전구를 누를 때와 누르지 않을 때 , 어느 것이 더 최소 횟수인가 ?
    // cur 의 임의 위치의 값이 target 값과 다르다면 스위치를 눌러주어야 함.
    // 즉 0110 같은 경우는 불가능(1이 붙어있는 경우)

    const compare = (tmp) => {
        for (let i = 0; i < n; i++) {
            if (tmp[i] !== target[i]) {
                return false;
            }
        }
        return true;
    };

    const divideCase = (start) => {
        const tmp = [...cur];
        let min = Number.MAX_SAFE_INTEGER;
        let cnt = 0;

        if (start === 0) {
            tmp[0] = tmp[0] === 0 ? 1 : 0;
            tmp[1] = tmp[1] === 0 ? 1 : 0;
            cnt++;
        }

        for (let i = 1; i < n; i++) {
            if (tmp[i - 1] !== target[i - 1]) {
                tmp[i - 1] = tmp[i - 1] === 0 ? 1 : 0;
                tmp[i] = tmp[i] === 0 ? 1 : 0;
                if (i < n - 1) tmp[i + 1] = tmp[i + 1] === 0 ? 1 : 0;

                cnt++;
            }
        }
        if (compare(tmp)) min = cnt;
        return min;
    };

    const firstPush = divideCase(0);
    const firstNotPush = divideCase(1);

    const ans = Math.min(firstPush, firstNotPush);

    ans === Number.MAX_SAFE_INTEGER ? console.log(-1) : console.log(ans);
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    solution(input);
    process.exit();
});
