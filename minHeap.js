class Heap {
    constructor() {
        this.heap = [];
    }
    getLeftChildIndex = (parentIndex) => {
        return parentIndex * 2 + 1;
    };
    getRightChildIndex = (parentIndex) => {
        return parentIndex * 2 + 2;
    };
    getParentIndex = (childIndex) => {
        return Math.floor((childIndex - 1) / 2);
    };

    insert = (key, value) => {
        const node = { key, value };
        this.heap.push(node);
        this.heapifyUp();
    };

    heapifyUp = () => {
        let index = this.heap.length - 1;
        const lastInsertedNode = this.heap[index];

        while (index > 0) {
            const parentIndex = getParentIndex(index);

            if (this.heap[parentIndex].key > this.heap[index].key) {
                this.heap[index] = this.heap[parentIndex];
                index = parentIndex;
            } else break;
        }

        // break 됐을 때 , 해당 위치에 값을 넣음.
        this.heap[index] = lastInsertedNode;
    };

    remove = () => {
        const count = this.heap.length;
        const rootNode = this.heap[0];

        if (count <= 0) return undefined;

        // 힙의 갯수가 1개이면 힙을 비운다.
        if (count === 1) this.heap = [];
        else {
            this.heap[0] = this.heap.pop();
            this.heapifyDown();
        }
        return rootNode;
    };

    heapifyDown = () => {
        let index = 0;
        const count = this.heap.length;

        // 첫 번째 노드 (갱신이 필요한 값)
        const rootNode = this.heap[index];

        // 왼쪽 ChildIndex가 존재하다는 건 자식 인덱스가 존재하다는 얘기
        while (this.getLeftChildIndex(index) < count) {
            const leftChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);

            // 오른쪽 자식 노드가 없다면 leftChildIndex가 smallerChildIndex로
            // 굳이 비교할 필요가 없으니까
            const smallerChildIndex =
                rightChildIndex < count &&
                this.heap[rightChildIndex].key < this.heap[leftChildIndex].key
                    ? rightChildIndex
                    : leftChildIndex;

            // 위로 끌어 올림
            if (this.heap[smallerChildIndex].key <= rootNode.key) {
                this.heap[index] = this.heap[smallerChildIndex];
                index = smallerChildIndex;
            } else break;
        }
        this.heap[index] = rootNode;
    };
}

class PriorityQueue extends Heap {
    constructor() {
        super();
    }

    enqueue = (priority, value) => this.insert(priority, value);
    dequeue = () => this.remove();
    isEmpty = () => this.heap.length <= 0;
}
