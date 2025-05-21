const findRoots = (a, b, c) => {
    const D = b ** 2 - 4 * a * c;

    if (D < 0) return []; 
    if (D === 0) return [-b / (2 * a)]; 

    const sqrtD = Math.sqrt(D);
    return [(-b + sqrtD) / (2 * a), (-b - sqrtD) / (2 * a)];
};

module.exports = findRoots;
