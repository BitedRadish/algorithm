// 버블 정렬
// 인접한 두 값을 비교하여 , 가장 큰 값이 맨 뒤로 가는 방식
// O(n^2)

const arr = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length - i; j++) {
        if (arr[j - 1] > arr[j]) {
            [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        }
    }
}
console.log(arr);
