function newMagicMatrix(input) {
    let rowArr = [];
    let colArr = [];
    let newArr = [];
    let isMagic = true;
    for (let i = 0; i < input.length; i++) {
        let rowsSum = input[i].reduce((a, b) => a + b)
        rowArr.push(rowsSum);
    }
    for (let i = 0; i < input.length; i++) {
        let sum = 0;
        for (let j = 0; j < input.length; j++) {
            sum += input[j][i];
        }
        colArr.push(sum);
    }
    newArr = rowArr.concat(colArr);
    for (let i = 0; i < newArr.length; i++) {
        let finalNum = newArr[i + 1];
        if (finalNum === newArr[0]) {
            isMagic=true;
        } else {
            isMagic=false;
        }
        return isMagic;
    }

}
console.log(newMagicMatrix([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]
));
