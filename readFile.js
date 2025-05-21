const fs = require('fs');
const validate = require('./validation');

const readFile = (filePath) => {
    try {
        const data = fs.readFileSync(filePath, 'utf8').trim();
        const parts = data.split(' ').map((num) => num.trim());

        if (parts.length !== 3) {
            throw new Error(`invalid file format`);
        }

        return parts.map((num, i) => {
            const { isValid, message } = validate(num, i !== 0);
            if (isValid) return parseFloat(num);
            else throw new Error(message);
        });
    } catch (error) {
        console.error(`Error reading file: ${error.message}`);
        process.exit(1);
    }
};

module.exports = readFile;
