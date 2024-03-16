function solution(input) {
    // n은 수열의 길이 , m은 최솟값
    const [n, m] = input[0];
    const arr = input
        .slice(1)
        .map((el) => +el)
        .sort((a, b) => a - b);

    let min = Number.MAX_SAFE_INTEGER;
    let left = 0;
    let right = 1;

    // 정렬을 갈긴 다음에 , right만 움직이면 되는 거 아닌가 ?
    // 아님 1 3 4 5 일 때 , m=1이면 4,5일 때니까
    // 그러면 left는 0부터 시작을 해서 right랑 뺐을 때 , m보다 크거나 같으면 멈추고
    // left를 증가시키면 됨 , 작으면 right를 증가시키고 그렇게 최대 최소 비교하면 될 듯 ?

    while (left < n && right < n) {
        const diff = arr[right] - arr[left];

        if (diff >= m) {
            if (diff === m) return console.log(m);
            min = Math.min(min, diff);

            ++left;
        } else {
            right++;
        }
    }
    console.log(min);
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
