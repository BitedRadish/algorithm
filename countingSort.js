// 계수 정렬
// 범위 조건이 있는 경우에 한해서 굉장히 빠른 알고리즘
// 크기를 기준으로 세는 알고리즘 O(n)

const arr = [
    1, 3, 2, 4, 3, 2, 5, 3, 1, 2, 3, 4, 4, 3, 5, 1, 2, 3, 5, 2, 3, 1, 4, 3, 5,
    1, 2, 1, 1, 1,
];

const max = Math.max(...arr);
const sortedArr = Array(max).fill(0);

for (let i = 0; i < arr.length; i++) {
    sortedArr[arr[i] - 1]++;
}

for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i]) {
        for (let j = 0; j < sortedArr[i]; j++) {
            console.log(i + 1);
        }
    }
}
