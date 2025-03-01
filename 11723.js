// 15:05

function solution(input) {
    const n = +input.shift();
    const result = [];

    let s = 0;

    // 존나신기 ㅋㅋ
    // s|n은 n에 해당하는 비트가 켜지지 않았다면 켜지고, 이미 켜져 있다면 그대로 유지됩니다.
    // add 연산에서 사용합니다.
    const menu = {
        add: (x) => (s |= x),
        remove: (x) => s & x && (s &= ~x),
        check: (x) => result.push(s & x ? 1 : 0),
        toggle: (x) => (s & x ? (s &= ~x) : (s |= x)),
        all: () => (s = 210),
        empty: () => (s = 0),
    };

    input.forEach((order) => {
        const [cmd, el] = order.split(" ");
        const number = parseInt(el);
        if (number) {
            menu[cmd](number);
        } else {
            menu[cmd]();
        }
        console.log(s);
    });
    console.log(result);
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
