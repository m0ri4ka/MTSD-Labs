const findRoots = (a, b, c) => {
    let result = [];
    const D = b ** 2 - 4 * a * c;

    if (D == 0) {
        result = [-b / (2 * a)];
    } else if (D > 0) {
        const first = (-b + Math.sqrt(D)) / (2 * a);
        const second = (-b - Math.sqrt(D)) / (2 * a);
        result = [first, second];
    }
    return result;
};

module.exports = findRoots;
