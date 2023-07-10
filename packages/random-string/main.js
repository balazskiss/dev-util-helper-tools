function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

module.exports.generateString = function (requestData, callback) {
    let result = "";
    for(let i = 0; i < requestData.numberOfStrings; i++) {
        let str = generateRandomString(requestData.numberOfCharacters);
        result += str + "\n";
    }
    callback(result);
}