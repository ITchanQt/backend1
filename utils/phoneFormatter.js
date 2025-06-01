const formatPhoneNumer = (phoneNumber) => {
    const cleaned = phoneNumber.replace(/\D/g, '');
    
    const lastNineDigits = cleaned.slice(-9);

    return parseInt(lastNineDigits);
};

module.exports = {formatPhoneNumer};