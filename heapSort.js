// 힙 트리 구조를 이용하는 정렬 방법
// 힙이란 ?
// 완전 이진 트리의 일종 , 완전 이진 트리를 표현하는 가장 쉬운 방법은 배열에 그대로 삽입하는 것.
// 최대 힙 또는 최소 힙으로 구성된다.
// 힙은 최솟값이나 최댓 값을 빠르게 찾아내기 위해 완전 이진 트리를 기반으로 하는 트리
// 힙 생성 알고리즘의 시간 복잡도는 O(log n ), 전체 데이터 갯수가 N개 이므로 시간 복잡도는 O(N logN)
// Nlog(N) -> 자식 노드로 내려 갈때마다 노드의 갯수가 2배씩 증가하기 떄문
// 특정한 노드의 자식 중에서 더 큰 자식과 자신의 위치를 바꾸는 알고리즘

function heapSort(arr) {
    buildMaxHeap(arr);

    for (let i = arr.length - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, 0, i);
    }
}

function buildMaxHeap(arr) {
    const n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, i, n);
    }
}

function heapify(arr, i, heapSize) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let largest = i;

    if (left < heapSize && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < heapSize && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, largest, heapSize);
    }
}

// 예제 사용
const arr = [4, 10, 3, 5, 1];
console.log("Before sorting:", arr);
heapSort(arr);
console.log("After sorting:", arr);
