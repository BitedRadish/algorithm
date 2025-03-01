// 12:54
function solution(input) {
    const [n, m] = input.shift().split(" ").map(Number);
    const dict = {};
    const data = input.splice(0, n);

    data.forEach((d, idx) => {
        dict[d] = idx;
    });

    input.forEach((q) => {
        const idx = Number(q);
        if (idx) {
            console.log(data[q - 1]);
        } else {
            console.log(dict[q] + 1);
        }
    });
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

// var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// var k = s.shift().split(' ').map(function(e) { return parseInt(e); });
// var x = {};
// s.splice(0, k[0]).forEach(function(e, i) {
//   x[e] = (i + 1);
//   x[i + 1] = e;
// });
// console.log(s.map(function(e) { return x[e]; }).join('\n'));
