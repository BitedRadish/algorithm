const arr = [1, 2, 3, 4];

arr.forEach((el, idx, arr) => {
    console.log(`element : ${el} , idx : ${idx} , arr : ${arr}`);
});

const newArr = arr.map((cur, idx) => {
    console.log(`cur : ${cur} idx : ${idx} `);
});
