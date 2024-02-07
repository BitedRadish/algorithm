// 7
// A B C
// B D .
// C E F
// E . .
// F . G
// D . .
// G . .
// 인덱스에 어떻게 접근 ?
// 객체로 바꾼다면 ?

function solution(input) {
    // 각 배열의 인덱스는 자식들의 정보를 담고 있는 배열
    // 어차피 A부터 차례대로 알파벳 대문자로 매겨짐 .
    const n = +input.shift();
    const tree = makeObj(input);

    let preArr = "";
    let inArr = "";
    let postArr = "";

    function preOrder(node) {
        preArr += node;
        const [left, right] = tree[node];

        if (left !== ".") preOrder(left);
        if (right !== ".") preOrder(right);
        if (left === "." && right === ".") return;
    }
    function inOrder(node) {
        const [left, right] = tree[node];
        if (left !== ".") inOrder(left);
        inArr += node;
        if (right !== ".") inOrder(right);

        if (left === "." && right === ".") return;
    }

    function postOrder(node) {
        const [left, right] = tree[node];

        if (left !== ".") postOrder(left);
        if (right !== ".") postOrder(right);
        postArr += node;

        if (left === "." && right === ".") return;
    }

    preOrder("A");
    inOrder("A");
    postOrder("A");

    console.log(preArr);
    console.log(inArr);
    console.log(postArr);
}

function makeObj(input) {
    const tree = {};

    for (let i = 0; i < input.length; i++) {
        const [node, left, right] = input[i];
        tree[node] = [left, right];
    }
    return tree;
}
const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
    input.push(line.split(" "));
}).on("close", () => {
    solution(input);
    process.exit();
});
