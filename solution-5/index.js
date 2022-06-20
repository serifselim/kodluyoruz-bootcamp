const checkNumber = (number, min, max) => {
    let result = false;

    for (let i = min + 1; i <= max; i++) {
        if (number % i === 0) result = true;
        else return false;
    }

    return result;
};

const findSmallest = (min, max) => {
    let num = 20, isFind = false;

    while (!isFind)
        checkNumber(num, min, max) ? isFind = true : num += 20;

    return num;
};

console.log(findSmallest(1, 20));

// 20 şer 20 şer arttırmak 1 er 1 er arttırmaktan 20 kat daha az işlem gücü gerektirir. 