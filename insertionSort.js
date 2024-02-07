// 삽입 정렬
// 각 숫자를 적절한 위치에 삽입하는 방법
// O(n^2)
// 선택 , 버블 , 삽입 중에서는 삽입 정렬이 제일 빠름.
// 인덱스 순서대로 정렬이 됨 , 즉 , 인덱스가 6이 됐을 때는 0~5까지는 이미 정렬된 배열

const arr = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];

for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    // 핵심은 들어갈 자리를 어떻게 찾냐는 것
    // 옮겨져야 할 값은 변수에 옮겨두고 삭제한다.
    // 이후 변수에 있는 값을 적절한 위치에 삽입.
    // 미루는게 맞았음.

    // for (let j = 0; j < i; j++) {
    //     if (arr[i] < arr[j]) {
    //         let temp = arr[i];
    //         arr.splice(i, 1);
    //         arr.splice(j, 0, temp);
    //     }
    // }

    let j = i - 1;
    while (j >= 0 && temp < arr[j]) {
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = temp;

    console.log(arr);
}
