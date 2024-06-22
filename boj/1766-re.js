class MinHeap {
    constructor() {
        this.heap = [];
    }
    getLength() {
        return this.heap.length;
    }
    getLeftChildIdx(idx) {
        return 2 * idx + 1;
    }
    getRightChildIdx(idx) {
        return 2 * idx + 2;
    }
    getParentIdx(idx) {
        return Math.floor((idx - 1) / 2);
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

            if (this.heap[parentIdx] > lastInsertedNode) {
                this.heap[index] = this.heap[parentIdx];
                index = parentIdx;
            } else break;
        }
        this.heap[index] = lastInsertedNode;
    }

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
                this.heap[rightChildIdx] < this.heap[leftChildIdx]
                    ? rightChildIdx
                    : leftChildIdx;

            if (this.heap[smallerIdx] <= rootNode) {
                this.heap[index] = this.heap[smallerIdx];
                index = smallerIdx;
            } else break;
        }
        this.heap[index] = rootNode;
    }
}

function solution(input) {
    /** 문제의 수 : n, 정보의 개수 : m */
    const [n, m] = input[0];
    const arr = input.slice(1);

    const graph = Array.from({ length: n + 1 }, () => []);
    const inDegree = Array.from({ length: n + 1 }, () => 0);
    for (let rel of arr) {
        const [a, b] = rel;
        // 진출 차수 기반 graph
        graph[a].push(b);
        // 노드 별 진입 차수
        inDegree[b]++;
    }
    const pq = new MinHeap();
    const result = [];

    for (let i = 1; i < inDegree.length; i++) {
        const count = inDegree[i];
        if (count === 0) {
            pq.insert(i);
        }
    }

    while (pq.getLength()) {
        const cur = pq.remove();
        result.push(cur);

        for (const node of graph[cur]) {
            --inDegree[node];
            if (inDegree[node] === 0) {
                pq.insert(node);
            }
        }
    }
    console.log(result.join(" "));
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
    input.push(line.split(" ").map((el) => parseInt(el)));
}).on("close", () => {
    solution(input);
    process.exit();
});
