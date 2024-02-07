// 퀵 정렬
// 분할 정복 알고리즘
// 평균 O(n*log n)
// 특정한 값을 기준으로 큰 숫자와 작은 숫자를 서로 교환한 뒤에 배열을 두 개로 나눔
// 정렬하는데 가장 간단한 배열은 바로 요소가 없거나 , 하나만 있는 배열이라는 점에서 착안
// 피벗을 사용
// 분할을 하게 되면 왜 log n이냐 ?
// 별도의 메모리 공간을 사용하는 not in place 방식과 사용하지 않는 in place 방식

// Not in Place
function notInQuickSort(arr) {
    // 배열의 원소가 1개이거나 , 없으면
    if (arr.length < 2) {
        return arr;
    }
    // 첫 번째 원소를 피벗으로 설정

    const pivot = [arr[0]];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if (arr[i] > pivot) {
            right.push(arr[i]);
        } else {
            pivot.push(arr[i]);
        }
    }
    console.log(`pivot : ${pivot} , left : ${left} , right : ${right} `);
    return notInQuickSort(left).concat(pivot, quickSort(right));
}

// 중복 값의 위치가 바뀔 수도 있어 , unstable
function quickSortInPlace(arr, left = 0, right = arr.length - 1) {
    if (left >= right) {
        return;
    }
    const pivot = left;
    let i = left + 1;
    let j = right;
    while (i <= j) {
        while (i <= right && arr[i] <= arr[pivot]) {
            i++;
        }
        while (j >= left && arr[j] >= arr[pivot]) {
            j--;
        }
        if (i > j) {
            [arr[j], arr[pivot]] = [arr[pivot], arr[j]];
        } else {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    quickSortInPlace(arr, left, j - 1);
    quickSortInPlace(arr, j + 1, right);
}

const arr = [5, 1, 2, 8, 7];
quickSortInPlace(arr);
console.log(arr);
