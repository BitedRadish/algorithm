function solution(input) {
    // 전위 순회
    const preOrder = input;

    const tree = {};
    const makeObj = (subTree) => {
        if (subTree.length === 0) return;

        const root = subTree[0];

        const left = [];
        const right = [];

        for (let i = 1; i < subTree.length; i++) {
            const node = subTree[i];
            node <= root ? left.push(node) : right.push(node);
        }
        tree[root] = [left[0], right[0]];
        makeObj(left);
        makeObj(right);
    };
    makeObj(preOrder);

    let ans = "";

    const postOrder = (root) => {
        if (!root) return;
        const left = tree[root][0];
        const right = tree[root][1];

        postOrder(left);
        postOrder(right);
        ans += root + "\n";
    };
    postOrder(preOrder[0]);
    console.log(ans);
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
    input.push(parseInt(line));
}).on("close", () => {
    solution(input);
    process.exit();
});
