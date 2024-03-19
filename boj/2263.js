function solution(input) {
    const n = +input[0];
    const inOrder = input[1].slice();
    const postOrder = input[2].slice();

    const callStack = [[0, n - 1, 0, n - 1]];
    let ans = "";

    while (callStack.length) {
        const [inStart, inEnd, postStart, postEnd] = callStack.pop();
        if (inStart > inEnd || postStart > postEnd) {
            continue;
        }

        const root = postOrder[postEnd];
        ans += root + " ";

        const inRootIdx = inOrder.indexOf(root);

        const postLeftEnd = postStart + (inRootIdx - 1 - inStart);

        callStack.push([inRootIdx + 1, inEnd, postLeftEnd + 1, postEnd - 1]);
        callStack.push([inStart, inRootIdx - 1, postStart, postLeftEnd]);
    }
    console.log(ans);
    // postOrder에서는 루트 값을 inOrder에게 제공
    // inOrder에서는 left와 right의 인덱스 값 제공
    // 중위 -> 후위 , 후위 -> 중위
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
