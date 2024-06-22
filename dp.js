const data = [0, 1];

function fibonacci(n) {
    // 0과 1
    if (n < data.length) {
        return data[n];
    }
    data[n] = fibonacci(n - 1) + fibonacci(n - 2);

    return data[n];
}

console.log(fibonacci(8));
console.log(data);
// [
//     0, 1,  1,  2, 3,
//     5, 8, 13, 21
//   ]
console.log(fibonacci(7));
