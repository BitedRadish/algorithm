class MinHeap {
    constructor() {
        this.heap = [];
    }
    logTree() {
        console.log(this.heap);
    }

    getLength() {
        return this.heap.length;
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

    insert(info) {
        const node = { weight: info[0], vertex: info[1] };
        this.heap.push(node);
        this.heapifyUp();
    }
    heapifyUp() {
        let index = this.heap.length - 1;
        const lastInsertedNode = this.heap[index];
        while (index > 0) {
            const parentIdx = this.getParentIdx(index);
            if (this.heap[parentIdx].weight > lastInsertedNode.weight) {
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

            const smallerIdx =
                rightChildIdx < count &&
                this.heap[rightChildIdx].weight < this.heap[leftChildIdx].weight
                    ? rightChildIdx
                    : leftChildIdx;

            if (this.heap[smallerIdx].weight <= rootNode.weight) {
                this.heap[index] = this.heap[smallerIdx];
                index = smallerIdx;
            } else break;
        }
        this.heap[index] = rootNode;
    }
}
function solution(input) {
    const [V, E] = input[0];
    const streets = input.slice(1);
    const visited = Array(V + 1).fill(0);
    const graph = Array.from({ length: V + 1 }, () => []);

    for (let i = 0; i < E; i++) {
        const [a, b, w] = streets[i];
        graph[a].push([w, b]);
        graph[b].push([w, a]);
    }
    const ans = [];
    let cnt = 0;
    const minHeap = new MinHeap();
    minHeap.insert([0, 1]);

    while (minHeap.getLength()) {
        const { weight: curWeight, vertex: curNode } = minHeap.remove();
        if (!visited[curNode]) {
            visited[curNode] = 1;
            ans.push(curWeight);
            cnt++;
            if (cnt === V) break;

            for (let node of graph[curNode]) {
                minHeap.insert(node);
            }
        }
    }
    console.log(ans.reduce((acc, val) => acc + val) - Math.max(...ans));
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
