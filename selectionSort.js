// 선택 정렬
// 주어진 숫자 중 가장 작은 것을 탐색한 후 , 알맞은 인덱스로 옮기는 것 .
// O(n^2)

const numArr = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];

// 총 10번 반복 -> 사실 9번만 반복돼도 됨
for (let i = 0; i < numArr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < numArr.length; j++) {
        if (numArr[j] < numArr[minIndex]) {
            minIndex = j;
        }
    }

    if (i !== minIndex) {
        // let tmp = numArr[i];
        // numArr[i] = numArr[minIndex];
        // numArr[minIndex] = tmp;
        [numArr[i], numArr[minIndex]] = [numArr[minIndex], numArr[i]];
    }
}
console.log(numArr);
