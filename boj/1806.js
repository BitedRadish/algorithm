function solution(input) {
    const [n, m] = input[0];
    const arr = input[1];

    let left = 0;
    let right = 0;

    let sum = arr[left];
    let length = 1;

    let min = Number.MAX_SAFE_INTEGER;
    // sum은 예제 입력 1번 기준으로 6으로 할당돼있음
    while (left < n && right < n) {
        if (sum >= m) {
            min = Math.min(min, length);
            sum -= arr[left];
            left++;
            length--;
        } else {
            right++;
            sum += arr[right];
            length++;
        }
    }
    min === Number.MAX_SAFE_INTEGER ? console.log(0) : console.log(min);
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
