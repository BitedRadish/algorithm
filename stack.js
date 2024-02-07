// 스택
// LIFO(Last In First Out) 구조
// 함수 호출 , 역순 문자열 처리 , 웹 브라우저의 뒤로 가기 , 수식 평가 등에 사용됩니다.
// 메모리 관리 , 재귀 함소 후촐 , 그래프 알고리즘 등 다양한 상황에서 활용됩니다.

class Stack {
    // 언더 스코어는 내부적으로만 사용되는 변수를 나타내기 위한 명명 규칙 중 하나
    constructor() {
        this._arr = [];
    }

    push(data) {
        this._arr.push(data);
    }
    pop() {
        return this._arr.pop();
    }
    peek() {
        return this._arr[this._arr.length - 1];
    }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // 3
console.log(stack.peek()); // 2

// FIFO (Fisrt in First Out) 구조
// 작업 대기열 , 우선 순위 탐색 , 버퍼 , 프린터 대기열 등에 사용됩니다.
class Queue {
    constructor() {
        this._arr = [];
    }
    enqueue(data) {
        this._arr.push(data);
    }
    dequeue() {
        return this._arr.shift();
    }
    front() {
        return this._arr[0];
    }
    rear() {
        return this._arr[this._arr.length - 1];
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.front());
console.log(queue.rear());
