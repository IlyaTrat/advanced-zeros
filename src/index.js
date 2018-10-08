module.exports = function getZerosCount(number, base) {
  if(base === 1) { return number + "!"}
  const simpleMult = getSimpleMult(base);
  const keys = getKeys(simpleMult);
  const result = [];
  keys.forEach(key => {
    let zeros = 0;
    for(let i = 1;  Math.pow(key, i) <= number; i++) {
      zeros += Math.floor(number / Math.pow(key, i));
    }
    result.push(Math.floor(zeros/simpleMult[key]));
  });
  result.sort((a, b) => a - b);
  return result[0];
}

function getSimpleMult(base) {
  const res = {};
  let temp = base;
  while(temp > 1) {
    for(let i = 2; ; i++) {
      if(temp % i === 0) {
        res[i] ? res[i] += 1: res[i] =1;
        temp /= i;
        break;
      }
    }
  }
  return res;
}

function getKeys(obj) {
  const keys = Object.keys(obj);
  keys.sort((a, b) => a - b);
  return keys;
}