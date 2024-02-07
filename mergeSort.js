// 병합 정렬
// O(nlogn)을 확실히 보장할 수 있음 .

// function mergeSort(arr) {
//     const sortedArray = conquer(divide(arr));
//     console.log(sortedArray);
// }

function conquer(left, right) {
    const newArr = [];
    console.log(`left : ${left} , right : ${right}`);

    while (left.length && right.length) {
        left[0] <= right[0]
            ? newArr.push(left.shift())
            : newArr.push(right.shift());
    }
    return [...newArr, ...left, ...right];
}

function divide(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const mid = Math.floor((arr.length - 1) / 2);
    const left = arr.slice(0, mid + 1);
    const right = arr.slice(mid + 1);

    console.log(`left : ${left} , right : ${right}`);

    return conquer(divide(left), divide(right));
}

const arr = [7, 6, 5, 8, 3, 5, 9, 1, 4];

const sortedArr = divide(arr);
console.log(sortedArr);
