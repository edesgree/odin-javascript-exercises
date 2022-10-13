const fibonacci = function (number) {
    // 1, 1, 2, 3, 5, 8,
    const list = [number];

    if (number > 0) {
        for (let i = 0; i < number; i++) {
            if (i === 0 || i === 1) {
                list[i] = 1;
            }
            else {
                list[i] = (list[i - 1] + list[i - 2]);
            }
        }
        return list[number - 1];
    }
    return 'OOPS';
};


// Do not edit below this line
module.exports = fibonacci;
