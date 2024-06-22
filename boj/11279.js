class MaxHeap {
    constructor() {
        this.heap = [];
    }
    logTree() {
        console.log(this.heap);
    }
    getLeftChildIdx(index) {
        return 2 * index + 1;
    }
    getRightChildIdx(index) {
        return 2 * index + 2;
    }
    getParentIdx(index) {
        return Math.floor((index - 1) / 2);
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }
    heapifyUp() {
        let index = this.heap.length - 1;
        const lastInsertedNode = this.heap[index];
        while (index > 0) {
            const parentIdx = this.getParentIdx(index);
            if (this.heap[parentIdx] < lastInsertedNode) {
                this.heap[index] = this.heap[parentIdx];
                index = parentIdx;
            } else break;
        }
        this.heap[index] = lastInsertedNode;
    }

    // return and remove
    remove() {
        if (this.heap.length === 0) return null;

        const rootNode = this.heap[0];
        if (this.heap.length === 1) this.heap = [];
        else {
            this.heap[0] = this.heap.pop();
            this.heapifyDown();
        }
        return rootNode;
    }
    heapifyDown() {
        let index = 0;
        const count = this.heap.length;

        const rootNode = this.heap[0];

        while (this.getLeftChildIdx(index) < count) {
            const leftChildIdx = this.getLeftChildIdx(index);
            const rightChildIdx = this.getRightChildIdx(index);

            const biggerIdx =
                rightChildIdx < count &&
                this.heap[rightChildIdx] > this.heap[leftChildIdx]
                    ? rightChildIdx
                    : leftChildIdx;

            if (this.heap[biggerIdx] >= rootNode) {
                this.heap[index] = this.heap[biggerIdx];
                index = biggerIdx;
            } else break;
        }
        this.heap[index] = rootNode;
    }
}

function solution(input) {
    const n = +input[0];
    const arr = input.slice(1);

    const maxHeap = new MaxHeap();
    let answer = "";

    for (let i = 0; i < arr.length; i++) {
        const x = arr[i];

        if (x === 0) {
            const max = maxHeap.remove();
            max ? (answer += `${max}`) : (answer += "0");

            if (i !== arr.length - 1) {
                answer += "\n";
            }
        } else {
            // heap에 추가
            maxHeap.insert(x);
        }
    }
    console.log(answer);
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
