// 적어도 하나가 다른 지원자보다 떨어지지 않는자만 , 즉 둘 다 떨어지면 탈락한다는 뜻
function solution(input) {
    const tc = +input[0];
    let employee = +input[1];

    let t = 0;
    let start = 2;
    while (t < tc) {
        let count = 1;
        const arr = input.slice(start, start + employee);
        arr.sort((a, b) => a[0] - b[0]);
        let base = arr[0][1];
        for (let i = 1; i < arr.length; i++) {
            if (base > arr[i][1]) {
                count++;
                base = arr[i][1];
            }
        }
        console.log(count);

        start += employee + 1;
        employee = +input[start - 1];
        t++;
    }
}
const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
    input.push(line.split(" ").map((el) => parseInt(el)));
}).on("close", () => {
    solution(input);
    process.exit();
});
