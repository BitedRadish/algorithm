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
    insertNode(curNode, newNode) {
        if (newNode.value < curNode.value) {
            if (curNode.left === null) {
                curNode.left = newNode;
            } else {
                this.insertNode(curNode.left, newNode);
            }
        } else {
            if (curNode.right === null) {
                curNode.right = newNode;
            } else {
                this.insertNode(curNode.right, newNode);
            }
        }
    }
    getRoot() {
        return this.root;
    }

    postOrder(node) {
        if (node.left) this.postOrder(node.left);
        if (node.right) this.postOrder(node.right);
        console.log(node.value);
    }
}

function solution(input) {
    const preOrder = input.slice();

    // 트리를 구성한 후 , postOrder 진행
    const bst = new BST();
    for (let i = 0; i < preOrder.length; i++) {
        bst.insert(preOrder[i]);
    }
    const root = bst.getRoot();

    bst.postOrder(root);
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
