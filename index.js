const readline = require('node:readline');
const findRoots = require('./findRoots');
const readFile = require('./readFile');
const validate = require('./validation');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const question = (prompt) => {
    return new Promise((resolve) => {
        rl.question(prompt, resolve);
    });
};

const getNumberInput = async (prompt, allowZero = true) => {
    let value;
    do {
        value = await question(prompt);
        const { isValid, message } = validate(value, allowZero);
        if (isValid) return parseFloat(value);
        else console.log(message);
    } while (true);
};

const getCoefficients = async () => {
    if (process.argv.length > 2) {
        const filePath = process.argv[2];
        return readFile(filePath);
    } else {
        return [
            await getNumberInput('a = ', false),
            await getNumberInput('b = '),
            await getNumberInput('c = '),
        ];
    }
};

const start = async () => {
    const [a, b, c] = await getCoefficients();

    console.log(`Equation is: (${a}) x^2 + (${b}) x + (${c}) = 0`);
    const roots = findRoots(a, b, c);

    console.log(`There are ${roots.length} roots`);
    roots.forEach((root, i) => console.log(`x${i + 1} = ${root}`));
    rl.close();
};

start();
