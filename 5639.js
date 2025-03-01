class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(curRoot, newNode) {
        if (newNode.value < curRoot.value) {
            if (curRoot.left === null) {
                curRoot.left = newNode;
            } else {
                this.insertNode(curRoot.left, newNode);
            }
        } else {
            if (curRoot.right === null) {
                curRoot.right = newNode;
            } else {
                this.insertNode(curRoot.right, newNode);
            }
        }
    }

    getRoot() {
        return this.root;
    }
    postOrder(root) {
        const left = root.left;
        const right = root.right;

        if (left !== null) {
            this.postOrder(left);
        }
        if (right !== null) {
            this.postOrder(right);
        }
        console.log(root.value);
    }
}

// 16:14
function solution(input) {
    const bst = new BST();
    input.forEach((el) => bst.insert(el));
    const rootNode = bst.getRoot();

    bst.postOrder(rootNode);
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
    input.push(Number(line));
}).on("close", () => {
    solution(input);
    process.exit();
});
