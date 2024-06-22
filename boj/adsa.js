console.log(
    [1, 2, 3].filter((el, idx) => {
        if (el >= 2) {
            return idx;
        }
    })
);
