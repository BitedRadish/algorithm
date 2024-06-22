function solution(input) {
    const TC = +input[0];

    let T = 0;
    let i = 1;

    while (T < TC) {
        const F = +input[i];
        const arr = input.slice(i + 1, i + F + 1);

        const human = new Set();

        for (let e of arr) {
            const [e1, e2] = e.split(" ");
            human.add(e1);
            human.add(e2);
        }
        const humanArr = Array.from(human);

        const parentArr = Array.from(
            { length: humanArr.length },
            (_, idx) => idx
        );

        for (let i = 0; i < arr.length; i++) {
            let [a, b] = arr[i].split(" ");
            a = humanArr.indexOf(a);
            b = humanArr.indexOf(b);
            unionParent(parentArr, a, b);
            console.log(
                parentArr.filter(
                    (el) => el === parentArr[a] && el === parentArr[b]
                ).length
            );
        }
        i += F + 1;
        T++;
    }

    // path compression으로 정의하면 배열에 같은 값이 있는 것들 ?
    // path compression이 계속 업데이트 돼야 함
}
function getParent(arr, el) {
    if (arr[el] === el) return el;
    return getParent(arr, arr[el]);
}

function findParent(arr, a, b) {
    a = getParent(arr, a);
    b = getParent(arr, b);

    return a === b;
}

function unionParent(arr, a, b) {
    a = getParent(arr, a);
    b = getParent(arr, b);

    a < b ? (arr[b] = a) : (arr[a] = b);
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
