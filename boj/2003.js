function solution(input) {
    const [n, m] = input[0];
    const arr = input[1];

    const acc = arr.slice();

    for (let i = 1; i < arr.length; i++) {
        acc[i] += acc[i - 1];
    }

    let cnt = 0;
    let l = 0; //왼쪽
    let r = 1; //오른쪽

    if (acc.includes(m)) cnt++;

    while (l < acc.length) {
        if (acc[r] - acc[l] === m) {
            cnt++;
            l++;
            r = l + 1;
        } else {
            if (r < acc.length) {
                r++;
            } else {
                l++;
                r = l + 1;
            }
        }
    }
    console.log(cnt);
}

function solution1(input) {
    const [n, m] = input[0];
    const arr = input[1];

    let l = 0;
    let r = 0;
    let cnt = 0;

    let sum = arr[0];

    while (l < arr.length) {
        if (r === arr.length - 1) {
            if (sum === m) {
                cnt++;
                break;
            } else {
                sum -= arr[l];
                l++;
            }
        } else {
            if (sum === m) {
                cnt++;
                r++;
                sum += arr[r];
            } else {
                if (sum > m) {
                    sum -= arr[l];
                    l++;
                } else {
                    r++;
                    sum += arr[r];
                }
            }
        }
    }
    console.log(cnt);
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = [];
rl.on("line", (line) => {
    input.push(line.split(" ").map((el) => parseInt(el)));
}).on("close", () => {
    solution1(input);
    process.exit();
});
