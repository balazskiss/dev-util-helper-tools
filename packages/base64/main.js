function base64Encode(str) {
  const base64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  let encoded = '';

  for (let i = 0; i < str.length; i += 3) {
    const first = base64.indexOf(str[i]) >> 2;
    const second = ((base64.indexOf(str[i]) & 3) << 4) | (base64.indexOf(str[i + 1]) >> 4);
    const third = ((base64.indexOf(str[i + 1]) & 15) << 2) | (base64.indexOf(str[i + 2]) >> 6);
    const fourth = base64.indexOf(str[i + 2]) & 63;

    if (i + 1 >= str.length) {
      encoded += base64[first] + base64[second] + '==';
    } else if (i + 2 >= str.length) {
      encoded += base64[first] + base64[second] + base64[third] + '=';
    } else {
      encoded += base64[first] + base64[second] + base64[third] + base64[fourth];
    }
  }

  return encoded;
}

module.exports.encode = function(requestData, callback) {
    let str = base64Encode(requestData.str);
    callback(str);
}