const validate = (value, allowZero = true) => {
    if (!allowZero && value === '0') {
        return { message: 'Error. a cannot be 0', isValid: false };
    }
    if (isNaN(value) || value === '') {
        return {
            message: `Error. Expected a valid real number, got "${value}" instead`,
            isValid: false,
        };
    }
    return { isValid: true };
};

module.exports = validate;
